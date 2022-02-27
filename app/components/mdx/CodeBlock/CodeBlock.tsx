import Highlight, { defaultProps, Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/oceanicNext";
import cx from "classnames";
import rangeParser from "parse-numeric-range";

type addPrefix<TKey, TPrefix extends string> = TKey extends Language
  ? `${TPrefix}${TKey}`
  : never;

const calculateLinesToHighlight = (meta: string) => {
  const RE = /{([\d,-]+)}/;
  if (RE.test(meta)) {
    const strlineNumbers = RE.exec(meta)?.[1] as string;
    const lineNumbers = rangeParser(strlineNumbers);
    return (index: number) => lineNumbers.includes(index + 1);
  } else {
    return () => false;
  }
};

export default function CodeBlock(preProps: {
  children: {
    props: {
      children: string;
      className: addPrefix<Language, "language-">;
      line: string;
    };
  };
}) {
  const language =
    (preProps.children.props.className?.replace(/language-/, "") as Language) ??
    "plain text";

  const shouldHighlightLine = calculateLinesToHighlight(
    preProps.children.props.line
  );

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={preProps.children.props.children.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={cx("font-mono rounded-lg font-medium", className)}
          style={style}
        >
          <code className="inline-block text-[1em]">
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i });
              if (shouldHighlightLine(i)) {
                lineProps.className = `${lineProps.className} highlight-line`;
              }

              return (
                <div {...lineProps}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              );
            })}
          </code>
        </pre>
      )}
    </Highlight>
  );
}
