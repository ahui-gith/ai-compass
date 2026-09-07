# AI Compass

一站式 **AI 产品导航站**：收集、罗列市面上的优质 AI 产品，按分类清晰呈现，一键跳转官网，帮助开发者快速找到所需工具。

- 🎯 **纯静态**：无后端、无 Python，部署最简
- 📦 **数据驱动**：产品数据集中在一个 JSON 文件，改数据不改代码
- 🔍 **SSG + SEO**：每个产品独立静态页，可被搜索引擎收录

## ✨ 功能特性

- **产品罗列**：卡片网格展示名称、logo、分类、简介、标签、定价
- **分类筛选**：大模型 / AI 编程 / AI 图像 / AI 视频 / AI 音频 / AI 办公 / Agent / 其他
- **关键词搜索**：按名称 / 简介 / 标签实时检索
- **详情页**：每个产品独立静态页，独立 `<title>` 与描述
- **官网跳转**：一键直达产品官网（新标签页）
- **深色模式**：自动跟随系统
- **响应式**：移动端优先，1 / 2 / 3 列自适应

## 🛠 技术栈

| 层 | 选型 |
|---|---|
| 框架 | Next.js 16（App Router） |
| 语言 | TypeScript（strict） |
| UI | React 19 + Tailwind CSS 4 |
| 数据 | 静态 `data/products.json` |
| 部署 | Vercel |

## 📁 项目结构

```
AICompass/
├── specs/                        # 规格文档（PRD / 技术规范 / 架构 / 数据模型）
├── src/
│   ├── app/
│   │   ├── page.tsx              # 首页（产品列表）
│   │   ├── layout.tsx            # 根布局
│   │   ├── globals.css           # Tailwind 全局样式
│   │   ├── not-found.tsx         # 404 页
│   │   └── products/[slug]/
│   │       └── page.tsx          # 产品详情页（SSG + SEO）
│   ├── components/
│   │   ├── product-card.tsx      # 产品卡片
│   │   ├── product-explorer.tsx  # 筛选 + 搜索容器（客户端）
│   │   ├── product-logo.tsx      # logo（含首字母 fallback）
│   │   ├── category-filter.tsx   # 分类筛选
│   │   └── search-bar.tsx        # 搜索栏
│   └── lib/
│       ├── types.ts              # 类型 + 分类/定价映射
│       └── products.ts           # 数据访问 + 筛选搜索纯函数
├── data/
│   └── products.json             # 产品数据（唯一数据源）
├── public/                       # 静态资源
└── 配置文件（package.json / tsconfig / next.config / eslint / postcss）
```

## 🚀 快速开始

```bash
# 1. 安装依赖（国内可配镜像，见下）
npm install

# 2. 本地开发
npm run dev
# 打开 http://localhost:3000

# 3. 生产构建
npm run build
```

> 国内网络建议使用镜像源安装：`npm config set registry https://registry.npmmirror.com`（本项目已通过根目录 `.npmrc` 配置，未提交）。

## 📝 维护数据

在 `data/products.json` 数组中新增一条即可，**无需改任何代码**：

```json
{
  "slug": "product-slug",
  "name": "产品名",
  "logo": "https://example.com/favicon.ico",
  "category": "llm",
  "tags": ["tag1", "tag2"],
  "description": "一句话简介。",
  "url": "https://example.com",
  "pricing": "free",
  "featured": true,
  "addedAt": "2026-09-01"
}
```

字段说明：

| 字段 | 类型 | 说明 |
|---|---|---|
| `slug` | string | 唯一标识，kebab-case |
| `category` | string | `llm` `coding` `image` `video` `audio` `office` `agent` `other` |
| `pricing` | enum | `free` `freemium` `paid` |
| `featured` | boolean | 是否首页精选 |
| `addedAt` | string | 收录日期（可选） |

## ☁️ 部署（Vercel + 自定义域名）

1. 将代码推送到 GitHub（`origin`）的 `main` 分支
2. 在 [Vercel](https://vercel.com) 导入该 GitHub 仓库，框架自动识别为 Next.js
3. 在 Vercel 项目 **Settings → Domains** 绑定已购域名，按提示配置 DNS
4. 每次推送 `main` 自动构建部署

## 🔀 Git 双远程

项目同时关联 GitHub（供 Vercel 部署）与 Gitee（国内镜像）：

| 远程 | 地址 | 用途 |
|---|---|---|
| `origin` | `github.com/ahui-gith/ai-compass` | Vercel 自动部署 |
| `gitee` | `gitee.com/ahui-git/ai-compass` | 国内访问镜像 |

```bash
git push origin main   # 推 GitHub
git push gitee main    # 推 Gitee
```

## 📚 文档

- [产品需求文档](specs/PRD.md)
- [技术规范](specs/SPEC.md)
- [架构设计](specs/ARCHITECTURE.md)
- [数据模型与数据访问](specs/API.md)
