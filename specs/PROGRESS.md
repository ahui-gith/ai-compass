# 项目进展记录（PROGRESS）

> 本文件记录 AI Compass 从 0 到上线的完整过程与当前状态。
> **下次打开 Claude Code 时，先读本文件即可快速恢复上下文、继续干活。**

## 一、项目概述

**AI Compass**：纯静态 AI 产品导航站（收集 / 罗列 / 跳转 AI 产品），面向开发者。
- 无后端、无 Python，数据驱动（改 `data/products.json` 即可加产品）
- 部署在 Vercel，已绑定自定义域名，国内可访问

## 二、本次完成的工作（按阶段）

1. **规格文档** — `specs/PRD.md`、`SPEC.md`、`ARCHITECTURE.md`、`API.md`（纯静态方案，含架构取舍 ADR）
2. **Git 初始化** — `git init -b main` + `.gitignore` + 双远程 + 首次提交
3. **脚手架** — Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS 4 + ESLint
   - 目录名 `AICompass` 含大写违反 npm 命名，用临时小写目录创建后复制解决
   - npm 国内镜像（项目 `.npmrc` 用 npmmirror，已 gitignore，不提交）
4. **数据层** — `data/products.json`（10 条示例）、`src/lib/types.ts`、`src/lib/products.ts`
5. **前端 UI** — 首页列表 + 分类筛选 + 关键词搜索（ProductCard / ProductExplorer / CategoryFilter / SearchBar / ProductLogo）
6. **详情页 + SEO** — `src/app/products/[slug]/page.tsx`（SSG + generateStaticParams + generateMetadata）+ `not-found.tsx`
7. **UI 美化 + 深色模式** — 全部组件补齐 `dark:` 类，自动跟随系统
8. **README** — 项目根 `README.md`
9. **部署上线** — Vercel + 自定义域名，国内访问问题已解决

## 三、当前状态

- ✅ 项目已上线 Vercel，绑定自定义域名，国内可访问
- ✅ 双远程（GitHub + Gitee）已配置并同步
- ⏳ 数据仍是 **10 条示例**，待替换为真实 AI 产品数据

## 四、关键信息速查

### 技术栈

| 层 | 选型 |
|---|---|
| 框架 | Next.js 16（App Router）+ Turbopack |
| 语言 | TypeScript（strict） |
| UI | React 19 + Tailwind CSS 4 |
| 数据 | 静态 `data/products.json` |
| 部署 | Vercel + 自定义域名 |

### 常用命令

```bash
npm run dev     # 本地开发 http://localhost:3000
npm run build   # 生产构建（SSG 生成全部详情页）
npm run lint    # ESLint
```

### Git 双远程

| 远程 | 地址 | 用途 |
|---|---|---|
| `origin` | github.com/ahui-gith/ai-compass | **Vercel 自动构建** |
| `gitee` | gitee.com/ahui-git/ai-compass | 国内镜像 |

```bash
git push origin main   # 推 GitHub（触发 Vercel 自动构建）
git push gitee main    # 推 Gitee（同步镜像）
```

### 数据维护流程（加新产品）

1. 编辑 `data/products.json`，新增一条（字段见 `specs/API.md` 或 `README.md`）
2. `npm run build` 本地验证
3. `git push origin main`（触发构建）+ `git push gitee main`
4. 构建时 `generateStaticParams` 自动为新产品的 `/products/[slug]` 生成详情页

### 关键约束

- `slug` 唯一、kebab-case；`category` 必须是 8 个合法值之一（`llm`/`coding`/`image`/`video`/`audio`/`office`/`agent`/`other`）
- 项目名 `ai-compass`（npm 小写）；勿把 `.npmrc`、`node_modules`、`.next` 提交

## 五、下一步待办

- [ ] **填充真实 AI 产品数据**（替换 10 条示例）
- [ ] 可选优化：产品排序 / 置顶、分类统计页、更多分类标签
- [ ] 可选：接入 Analytics 统计访问量

## 六、相关文档

- `specs/PRD.md` — 产品需求
- `specs/SPEC.md` — 技术规范与命名约定
- `specs/ARCHITECTURE.md` — 架构与部署拓扑
- `specs/API.md` — 数据模型与数据访问层约定
