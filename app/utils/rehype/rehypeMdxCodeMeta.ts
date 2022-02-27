const rehypeMdxCodeMeta = async () => {
  const { visit } = await import("unist-util-visit");

  return (options = {}) => {
    return (tree) => {
      visit(tree, "element", visitor);
    };

    function visitor(node, index, parentNode) {
      if (node.tagName === "code" && node.data && node.data.meta) {
        const blocks = node.data.meta.split(" ") as string[];

        node.properties = blocks.reduce((props, block) => {
          const [prop, value] = block.split("=");

          if (typeof value === "undefined") {
            props.line = prop;

            return props;
          }

          props[prop] = value;

          return props;
        }, node.properties);
      }
    }
  };
};

export default rehypeMdxCodeMeta;
