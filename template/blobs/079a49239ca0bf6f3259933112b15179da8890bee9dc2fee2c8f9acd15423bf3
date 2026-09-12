# YSS 前端专职 Harness 模板

本仓库是 Harness Agent 的 `template-source`。入口见 [AGENTS.md](AGENTS.md)，职责见 [profile](docs/process/harness-profile.yaml)，接力合同见 [战略与后端交付](docs/process/frontend-backend-delivery.md)。

本仓从通用研发 Harness 分出，继续共享校验工具和技能来源；运行时代码通过登记的实现仓接入。前端必须同时具备批准战略与后端交付，真实服务版本重验通过后才继续正式任务。

## 初始化

从已经提交且干净的模板检出执行：

```bash
npx create-yss-harness-frontend@latest init --target-dir /absolute/path/to/project
```

CLI 支持 init、attach、sync、diff、doctor、recover、prune 和 update/upgrade。attach / sync 默认预览，`--apply` 才写入；旧 repository-local 实例不自动转换。npm 状态以 registry 为准，候选包从 `create-yss-harness-frontend` 仓构建实际 tgz 验收。

初始化只接受新目录，绑定本模板 profile、Git 提交和文件摘要；不会把已有通用、另一端或战略项目转换 profile。工作树候选只供模板维护验证，不能当作发布快照。

## 维护与验收

修改 canonical `.agents/skills` 后运行 `scripts/sync-skills`、`scripts/update-skill-lock` 和 `scripts/verify-template-fast`。共享接力工具由综合模板源同步，避免分别维护。同一业务切片须由统一管理方汇总战略、接口、部署及前端版本的端到端证据；本端完成不能替代整体业务验收。

既有 `create-yss-harness-dev` 实例按原固定版本维护。本家族 metadata v2 实例使用同家族 sync；跨家族和旧 repository-local 实例不自动迁移。

## 用户手册

首次使用请从[本仓手册](docs/user-guide/前端子项目用户手册.md)开始；练习见[设备借用职责案例](docs/user-guide/设备借用贯穿案例.md)，全部入口见[索引](docs/user-guide/用户手册索引.md)。

CLI 创建、接入、诊断、同步及恢复见 [CLI 使用说明](docs/user-guide/CLI使用说明.md)。
