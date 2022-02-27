const categoryKeys = ["mechanism", "flexbox"] as const;

const CATEGORIES: Record<typeof categoryKeys[number], string> = {
  mechanism: "渲染機制",
  flexbox: "Flexbox",
};

export { categoryKeys };
export default CATEGORIES;
