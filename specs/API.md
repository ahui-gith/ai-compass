# AI Compass — 数据模型与数据访问（Data Model）

> 版本：v1.1 · 更新：2026-09-07

> 本项目为纯静态站，无 HTTP 接口。本文档定义数据模型与前端数据访问层约定，替代传统 API 设计。

## 1. 数据模型

### 1.1 Product（产品）

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `slug` | string | ✅ | 唯一标识，kebab-case，如 `chat-gpt` |
| `name` | string | ✅ | 产品名称 |
| `logo` | string | ✅ | logo 地址（`/logos/xxx.svg` 或外部 URL） |
| `category` | string | ✅ | 分类 slug（见 1.4） |
| `tags` | string[] | | 标签数组 |
| `description` | string | ✅ | 一句话简介（≤ 80 字） |
| `url` | string | ✅ | 官网链接，须为 `https://` |
| `links` | ProductLink[] | | 详情页入口列表；缺省或空数组时显示 `url` 对应的“访问官网” |
| `pricing` | enum | ✅ | `free` \| `freemium` \| `paid` |
| `featured` | boolean | | 是否精选，默认 `false` |
| `addedAt` | string | | 收录日期，ISO `YYYY-MM-DD` |

### 1.2 详情页入口（ProductLink）

每个入口包含 `label`（非空按钮文案）与 `url`（`https://` 地址）。数组顺序即按钮顺序，可配置网页版、官方下载页、应用商店等入口。配置非空 `links` 后详情页展示这些入口；如需官网按钮，将官网也加入列表。首页卡片仍跳转产品详情页。

```json
"links": [
  { "label": "使用网页版", "url": "https://app.example.com" },
  { "label": "软件下载", "url": "https://example.com/download" }
]
```

下载入口为普通外链，不强制浏览器下载文件。

### 1.3 示例数据

```json
{
  "slug": "chat-gpt",
  "name": "ChatGPT",
  "logo": "/logos/chatgpt.svg",
  "category": "llm",
  "tags": ["chatbot", "assistant"],
  "description": "OpenAI 出品的通用对话助手与多模态大模型。",
  "url": "https://chat.openai.com",
  "pricing": "freemium",
  "featured": true,
  "addedAt": "2026-09-01"
}
```

### 1.4 Category（分类）

| slug | 展示名 |
|---|---|
| `llm` | 大模型 |
| `coding` | AI 编程 |
| `image` | AI 图像 |
| `video` | AI 视频 |
| `audio` | AI 音频 |
| `office` | AI 办公 |
| `agent` | Agent |
| `other` | 其他 |

> 分类以英文 slug 存储，中文展示名在前端 `src/lib/types.ts` 维护映射表，便于后续 i18n。

## 2. 数据访问层约定（`src/lib/products.ts`）

统一封装纯函数，页面与客户端组件共用：

| 函数 | 签名 | 说明 |
|---|---|---|
| `getProducts` | `() => Product[]` | 返回全部产品（从 `data/products.json` 导入） |
| `getProductBySlug` | `(slug: string) => Product \| undefined` | 按 slug 查单条，未命中返回 `undefined` |
| `getCategories` | `() => CategoryStat[]` | 返回分类及其产品数量 |
| `filterByCategory` | `(items: Product[], category: string) => Product[]` | 按分类过滤 |
| `searchProducts` | `(items: Product[], query: string) => Product[]` | 按名称 / 简介 / 标签搜索 |

其中 `CategoryStat = { slug: string; label: string; count: number }`。

## 3. 实现约定

- 数据从 `data/products.json` 一次性导入（构建期打包，数据量小）
- 筛选 / 搜索逻辑集中在 `src/lib/products.ts`，纯函数、可复用
- 详情页 SSG 用 `getProductBySlug` 生成静态页；列表筛选 / 搜索由客户端组件调用 `filterByCategory` / `searchProducts`
- 无网络请求、无后端、无写入端点（数据变更直接改 `products.json` 后重新构建部署）
