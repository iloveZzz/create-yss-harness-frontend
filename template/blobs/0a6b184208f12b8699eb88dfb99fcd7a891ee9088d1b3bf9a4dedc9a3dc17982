# YSS 前端专职 Harness 模板

本仓库是 Harness Agent 的 `template-source`。入口见 [AGENTS.md](AGENTS.md)，职责见 [profile](docs/process/harness-profile.yaml)，接力合同见 [战略与后端交付](docs/process/frontend-backend-delivery.md)。

本仓从通用研发 Harness 分出，继续共享校验工具和技能来源；运行时代码通过登记的实现仓接入。前端必须同时具备批准战略与后端交付，真实服务版本重验通过后才继续正式任务。

## 初始化

从已经提交且干净的模板检出执行：

```bash
npx create-yss-harness-frontend@latest init --target-dir /absolute/path/to/project
```

新 CLI 首版候选支持 init、attach、sync、update/upgrade。attach / sync 默认预览，`--apply` 才写入；旧实例不兼容。发布前可从 `create-yss-harness-frontend` 仓的 tgz 本地安装验收。仓内旧入口仅在新 npm 版本可安装且完成 smoke test 后退役，当前仍保留原行为。

初始化只接受新目录，绑定本模板 profile、Git 提交和文件摘要；不会把已有通用、另一端或战略项目转换 profile。本入口随仓库提供，目前没有专用 npm 包。`--allow-working-tree` 只供模板维护验证，产出标为不可发布快照。

## 维护与验收

修改 canonical `.agents/skills` 后运行 `scripts/sync-skills`、`scripts/update-skill-lock` 和 `scripts/verify-template-fast`。共享接力工具由综合模板源同步，避免分别维护。同一业务切片须由统一管理方汇总战略、接口、部署及前端版本的端到端证据；本端完成不能替代整体业务验收。

旧 `create-yss-harness-dev` 仍服务原通用项目。本专职模板尚不提供原地 sync/迁移；升级先生成同 profile 新目录，核对差异后迁移已登记资产，保留旧目录作为回滚点。

## 用户手册

首次使用请从 [本仓手册](docs/user-guide/前端子项目用户手册.md) 开始；练习见 [设备借用贯穿案例](docs/user-guide/设备借用贯穿案例.md)，其他入口见 [索引](docs/user-guide/用户手册索引.md)。
