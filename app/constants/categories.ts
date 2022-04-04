const categoryKeys = ["mechanism", "performance"] as const;

const CATEGORIES: Record<typeof categoryKeys[number], string> = {
  mechanism: "渲染機制",
  performance: "效能優化",
};

export { categoryKeys };
export default CATEGORIES;
