# 产品数据核实记录

核实日期：2026-09-26。当前共 37 款，按主要场景归入现有八类；属于编辑精选，不代表流量排名。`data/products.json` 仍是唯一展示数据源，本文件仅记录来源。

## 收录口径

- 采用官方产品页、定价/帮助文档与开发者发布的应用商店页面；链接不含推广参数。
- `free` 指介绍的使用方式免费；`freemium` 指免费层/额度加付费升级；`paid` 指核心持续使用需付费。免费注册、限时试用不等于免费使用。
- 不记录具体价格、模型版本或免费额度；API、算力与商业授权可能另计。
- 每款按主要用途分类，用中文标签补充其他能力。保留原 10 款的 slug 与收录日期。
- 图标沿用官网 favicon 方式，未逐一核实图标资源；加载失败使用现有首字母回退。
- 仅核实公开页面，未实测登录后的功能或各地区可访问性。

## 官方依据

| 产品 | 分类 | 依据 |
|---|---|---|
| ChatGPT | llm | [官方页面](https://chatgpt.com/pricing/) |
| Claude | llm | [官方页面](https://claude.com/pricing) |
| Google Gemini | llm | [官方页面](https://gemini.google/subscriptions/) |
| DeepSeek | llm | [官方页面](https://api-docs.deepseek.com/news/news250115/) |
| 豆包 | llm | [官方页面](https://www.doubao.com/legal/ey01) |
| Kimi | llm | [官方页面](https://www.kimi.com/resources/kimi-k2-6-pricing) |
| GitHub Copilot | coding | [官方页面](https://github.com/features/copilot/plans) |
| Cursor | coding | [官方页面](https://cursor.com/pricing) |
| Replit | coding | [官方页面](https://docs.replit.com/billing/plans/starter-plan) |
| Bolt | coding | [官方页面](https://bolt.new/pricing) |
| Midjourney | image | [官方页面](https://docs.midjourney.com/hc/en-us/articles/27870484040333-Comparing-Midjourney-Plans) |
| Stable Diffusion | image | [官方页面](https://stability.ai/license) |
| Ideogram | image | [官方页面](https://ideogram.ai/pricing/) |
| Leonardo.Ai | image | [官方页面](https://leonardo.ai/pricing) |
| remove.bg | image | [官方页面](https://www.remove.bg/pricing) |
| Runway | video | [官方页面](https://runway.com/pricing) |
| Pika | video | [官方页面](https://pika.art/pricing) |
| 可灵 AI | video | [官方页面](https://ir.kuaishou.com/news-releases/news-release-details/kuaishou-launches-full-beta-testing-kling-ai-global-users-0) |
| 即梦 AI | video | [官方页面](https://apps.apple.com/cn/app/id6503676563) |
| ElevenLabs | audio | [官方页面](https://elevenlabs.io/pricing) |
| Suno | audio | [官方页面](https://suno.com/pricing) |
| Descript | audio | [官方页面](https://www.descript.com/pricing) |
| Notion AI | office | [官方页面](https://www.notion.com/pricing) |
| Gamma | office | [官方页面](https://gamma.app/pricing) |
| Dify | agent | [官方页面](https://dify.ai/pricing) |
| 扣子 | agent | [官方页面](https://docs.coze.cn/guides_edition) |
| AutoGPT | agent | [官方页面](https://agpt.co/) |
| n8n | agent | [官方页面](https://n8n.io/pricing/) |
| Perplexity | other | [官方页面](https://www.perplexity.ai/hub) |
| DeepL | other | [官方页面](https://www.deepl.com/en/pro) |
| 千问 | llm | [官网](https://www.qianwen.com/)、[开发者 App Store 页面](https://apps.apple.com/cn/app/id6466733523) |
| Qwen 开放模型 | llm | [通义实验室](https://qianwen.aliyun.com/landing?family=qwen)、[官方模型库](https://huggingface.co/Qwen)、[Qwen3 仓库及许可](https://github.com/QwenLM/Qwen3) |
| Qwen Code | coding | [官方仓库](https://github.com/QwenLM/qwen-code)、[中文文档](https://qwenlm.github.io/qwen-code-docs/zh/users/overview/)、[桌面版发布页](https://github.com/QwenLM/qwen-code/releases/tag/desktop-latest) |
| 阿里云百炼 | agent | [产品页](https://www.aliyun.com/product/bailian)、[模型计费](https://help.aliyun.com/zh/model-studio/model-pricing)、[API 入门](https://help.aliyun.com/zh/model-studio/first-api-call-to-qwen) |
| WorkBuddy | office | [腾讯云产品介绍](https://cloud.tencent.com/product/workbuddy)、[官方定价文档](https://www.workbuddy.cn/docs/workbuddy/Pricing)、[桌面下载页](https://www.workbuddy.cn/work/)、[手机下载页](https://www.workbuddy.cn/app-download/) |

## 定价与入口说明

- 新增 Codex 与 Claude Code，均归入 `coding`，分别于 ChatGPT、Claude 对话产品之外单独收录。
- Codex 依据 [OpenAI 官方定价文档](https://learn.chatgpt.com/docs/pricing)标 `freemium`；免费层受限且部分能力逐步开放，不代表网页、CLI 与所有模型都免费。入口依据[云端文档](https://learn.chatgpt.com/docs/cloud)、[桌面文档](https://learn.chatgpt.com/docs/app)、[CLI 文档](https://developers.openai.com/codex/cli/)。旧 developers.openai.com 的桌面与定价文档已重定向至 ChatGPT Learn，因此桌面按钮标为使用指南。
- Claude Code 依据[官方产品页](https://claude.com/product/claude-code)标 `paid`，可使用相应订阅或按 API 用量计费，不沿用 Claude 对话产品的免费增值标签。[官方概览](https://code.claude.com/docs/en/overview)提供网页、CLI 与桌面入口；桌面使用 Claude 客户端中的 Code 功能。

- 本次追加 5 项：千问消费端、Qwen 开放模型、Qwen Code、百炼开发平台与 WorkBuddy。模型与应用分开收录，不按模型版本重复铺设条目。
- 千问 App 已有订阅内购，按免费增值标注，不采用早期发布时的“永久免费”表述。仅配置已核实的网页与 iOS 入口。
- Qwen 开放模型的 `free` 指可按各模型许可下载权重；Qwen3 官方仓库明确 Apache 2.0，但不据此推断所有 Qwen 模型使用相同许可。商用 API 与本地算力另计。
- Qwen Code 的 `free` 指 Apache 2.0 客户端软件，调用模型可能需要付费。桌面下载指向官方发布页，不指向易过期的版本安装包。
- 百炼按 API 和云服务用途标 `paid`；新用户试用额度不当作长期免费层。
- WorkBuddy 定价文档列出免费体验版的每月额度及付费订阅，按 `freemium` 标注；首页另有“限时免费”表述，免费权益是否持续需以后复查，不承诺永久免费。官网部分页面直接读取失败，使用搜索索引内容与腾讯云产品页交叉核实；未登录实测。

- GitHub Copilot 有免费层，从 `paid` 修正为 `freemium`。
- Pika Free 账户每月 0 积分、需购买积分包，按生成用途标 `paid`。
- Notion AI 的有限试用不是持续免费层，保留 `paid`。
- AutoGPT 云端无免费层，改为 `paid`；n8n 同样按云端收费标注。自部署版本仍需承担运行及模型费用。
- Stable Diffusion 的 `free` 仅指符合社区许可条件的本地使用，非所有商业用途均免费。
- 可灵使用本次可读取的官方国际站 `kling.ai`；原 `klingai.com` 抓取失败。免费层参考官方发布及[官方积分页面](https://kling.ai/explore/kling_ai_free_credit)，不承诺固定额度。
- 豆包免费基础版及订阅信息见[开发者 App Store 页面](https://apps.apple.com/cn/app/id6459478672)与官方付费协议。
- 即梦参考开发者 App Store 免费下载与内购信息；免费生成额度未单独核实，以登录后显示为准。
- Kimi 免费层参考官方 K2.6 定价页的 Adagio 档，不混用 API 试用额度。
- Runway 官网改为 `runway.com`，其官方创作入口仍是 `app.runwayml.com`。

## 多入口依据

[ChatGPT 下载](https://chatgpt.com/download/)、[Claude 下载](https://claude.com/download)、[DeepSeek App](https://api-docs.deepseek.com/news/news250115/)、[豆包桌面版](https://www.doubao.com/download/desktop)、[Cursor 下载](https://cursor.com/download)、[Descript 下载](https://www.descript.com/download)、[Notion 桌面版](https://www.notion.com/desktop)、[Dify 源码](https://github.com/langgenius/dify)、[AutoGPT 源码](https://github.com/Significant-Gravitas/AutoGPT)。源码入口明确标注为自部署，不当作安装包。
