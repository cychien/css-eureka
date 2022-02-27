import cx from "classnames";

const spacerSizes = {
  "0": "h-0",
  "2xs": "h-2xs",
  xs: "h-xs",
  sm: "h-sm",
  md: "h-md",
  lg: "h-lg",
  xl: "h-xl",
  "2xl": "h-2xl",
  "3xl": "h-3xl",
  "4xl": "h-4xl",
};

function Spacer({
  size,
  className,
}: {
  size: keyof typeof spacerSizes;
  className?: string;
}) {
  return <div className={cx(spacerSizes[size], className)} />;
}

export default Spacer;
