# AI Compass — 技术规范（SPEC）

> 版本：v1.1 · 更新：2026-09-07

## 1. 技术栈

| 层 | 选型 | 说明 |
|---|---|---|
| 前端框架 | Next.js（App Router） | Vercel 第一公民，SSG 契合静态目录站 |
| 前端语言 | TypeScript（strict） | 类型安全 |
| UI | React 18+ | 组件化 |
| 样式 | Tailwind CSS | 原子化，美观简洁 |
| 数据 | 静态 `data/products.json` + TS 类型约束 | 数据与展示分离，唯一数据源 |
| 交互 | 客户端组件（筛选 / 搜索） | 数据量小，浏览器内过滤，无需接口 |
| 依赖管理 | npm（`package.json`） | 纯前端，无 Python / conda |
| 部署 | Vercel + 自定义域名 | 纯静态，单平台单域名 |

> 版本策略：前端依赖以 `package.json` + 锁文件为准。

## 2. 开发环境

### 2.1 Node.js

- Node.js 18+（建议 LTS），使用 `nvm` 或系统安装管理
- 包管理器：npm

```bash
npm install      # 安装依赖
npm run dev      # 本地开发
npm run build    # 生产构建（SSG）
```

### 2.2 环境复现

```bash
npm install && npm run dev
```

## 3. 命名规范

| 对象 | 规范 | 示例 |
|---|---|---|
| 目录 / 文件 | kebab-case | `product-card.tsx` |
| TS 变量 / 函数 | camelCase | `getProducts`、`productList` |
| TS 类型 / 接口 | PascalCase | `Product`、`Category` |
| React 组件（导出名） | PascalCase | `ProductCard` |
| 常量 | UPPER_SNAKE_CASE | `CATEGORIES`、`PAGE_SIZE` |
| Git 分支 | `feat/*`、`fix/*`、`docs/*`、`chore/*` | `feat/search-bar` |
| 数据字段 | 驼峰或 kebab（`slug`） | `addedAt` |

## 4. 代码规范

- **前端**：ESLint + Prettier + TypeScript `strict`；组件单一职责，逻辑抽到 `src/lib/`
- **提交**：Conventional Commits（`feat:` / `fix:` / `docs:` / `chore:` / `refactor:`）

## 5. Git 工作流

### 5.1 双远程

| 远程 | 用途 | 地址 |
|---|---|---|
| `origin` | GitHub（主，供 Vercel 自动部署） | `https://github.com/<user>/ai-compass.git` |
| `gitee` | Gitee（镜像，国内访问） | `https://gitee.com/<user>/ai-compass.git` |

```bash
git remote add origin https://github.com/<user>/ai-compass.git
git remote add gitee https://gitee.com/<user>/ai-compass.git
git push origin main
git push gitee main
```

### 5.2 分支策略

- `main`：保护分支，稳定可部署；Vercel 监听 `main` 自动构建
- 开发走 `feat/*` 分支，完成后合并回 `main`
- 小改动 / 文档可直接提交到 `main`

## 6. 依赖管理

- 唯一依赖入口：`package.json`（npm）
- 无 Python / conda / 后端依赖

## 7. 项目结构约定

见 `ARCHITECTURE.md` 目录结构树。核心原则：

1. **数据与代码分离**：产品数据放 `data/`，展示逻辑放 `src/`，静态资源放 `public/`
2. **规格先行**：功能 / 架构 / 数据变更先改 `specs/`，再改代码
3. **最小可用**：MVP 只实现 PRD 的 P1 功能，P2 不提前实现
