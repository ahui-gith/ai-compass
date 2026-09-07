// 产品定价
export type Pricing = "free" | "freemium" | "paid";

// 产品
export interface Product {
  slug: string;
  name: string;
  logo: string;
  category: string;
  tags: string[];
  description: string;
  url: string;
  pricing: Pricing;
  featured: boolean;
  addedAt?: string;
}

// 分类统计（供分类筛选使用）
export interface CategoryStat {
  slug: string;
  label: string;
  count: number;
}

// 分类 slug -> 中文展示名映射
export const CATEGORY_LABELS: Record<string, string> = {
  llm: "大模型",
  coding: "AI 编程",
  image: "AI 图像",
  video: "AI 视频",
  audio: "AI 音频",
  office: "AI 办公",
  agent: "Agent",
  other: "其他",
};

// 定价 -> 中文展示名映射
export const PRICING_LABELS: Record<Pricing, string> = {
  free: "免费",
  freemium: "免费增值",
  paid: "付费",
};
