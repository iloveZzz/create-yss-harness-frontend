# 技能迁移说明

本文记录已退役技能入口的迁移路径。退役技能不保留物理目录、投影或 lock 条目；本文件是历史名称的唯一持久兼容说明。

## 前端 Skill 面二次收敛（2026-09-20）

- `page-skeleton` 迁移到 `yss-ui-business-page-generation`。
- `component-selection-imports` 迁移到 `yss-ui` 与 `yss-ui/references/component-routing.md`。
- `page-list-module` 拆分到 `yss-ui-business-page-generation`、`yss-hook` 与 `ytable-usage`。
- `page-form-module` 拆分到 `yss-ui-business-page-generation` 与 `yss-formily` 路由的专项 Skill。
- `yss-use-table-height` 迁移到 `ytable-usage` / `yedit-table-usage`；`yss-use-tree-height` 迁移到 `ytree-usage`。
- `vue3-best-practices` 的请求与状态规则迁移到 `yss-hook`，类型边界以 `yss-api-integration` 为准。

这些入口已硬退役，不保留运行时 alias、物理目录、投影、Registry 条目或 lock 条目；命中旧 ID 返回 `skill-retired`。

## 前端组件总入口收敛（2026-09-15）

`yss-components` 已硬退役，不保留 alias、物理目录、投影或 lock 条目。前端页面统一从 `yss-ui` 路由：完整页面使用 `yss-ui-business-page-generation`，组件选型与导入使用 `yss-ui/references/component-routing.md`，表格、树、Formily 和 Hook 使用各自专项 Skill；组件高度由对应表格或树专项持有。没有独立 Skill 的复杂组件契约集中在 `yss-ui/references/specialized-components.md`。

`yss-formily` 保留为薄路由器，只选择 `formily-foundation`、联动、模式/详情和分步专项，不再复制表单代码骨架。旧 ID 只允许存在于本迁移记录、retired/obsolete 清单、负向测试和不可变历史证据中。

## 研究、页面与提交入口收敛（2026-09-11）

- `research` 物理 Skill 迁移到 `yss-research`；仅保留 `research` 作为其兼容 alias。
- `yss-page-module-development` 及 `page-module-development` 迁移到 `yss-ui-business-page-generation`，不保留旧 alias 或目录。
- `yss-microapp-commit` 及 `microapp-commit` 迁移到 `frontend-commit`，不保留旧 alias 或目录。

Registry、角色配置、公开清单、投影和 lock 必须使用新的 canonical ID；历史冻结证据不改写。

## 实现合同与源码索引技能硬替换（2026-09-04）

`yss-router` 已由 `yss-implementation-contract-compiler` 硬替换；`yss-source-index` 已由 `yss-skill-source-index-refresh` 硬替换。两个旧 ID 不保留 alias、兼容目录、投影或 lock 条目，也不能作为 Recipe、合同、模板或脚本的正向输入。

- Registry、编译器合同、Slice Implementation Contract 和 YSS Skill Execution Result 使用 schema v2。
- Recipe 只引用 dotted capability；类型化依赖只由 `docs/agents/yss-skill-registry.yaml` 持有。
- schema v1 明确拒绝并返回迁移提示，不自动升级。
- 历史冻结证据不改写；旧 ID 只允许留在本迁移记录、`OBSOLETE` 阻断集合和负向测试。

## high-fidelity-html-prototype

`high-fidelity-html-prototype` 已退役，不再作为 实现合同编译器 alias、默认发现入口或独立物理技能存在。

迁移到：

- 阶段合同：`yss-prototype-stage`
- 高保真默认入口：`yss-prototype-stage` 离线 HTML；独立视觉稿按需使用 `product-design:index`
- Ant Design v6 事实与 CLI 证据：`yss-antd-design`
- 独立低保真评审：`prototype-review`

当前分支不执行旧生命周期迁移；旧原型资产只作为上游输入，由 `harness-orchestrator` 重新判定实际影响并路由到四角色 Harness Agent 流程。不得创建旧角色、旧阶段或同名兼容目录。

## yss-product-lifecycle

`yss-product-lifecycle` 已退役，不再作为 实现合同编译器 alias、默认发现入口、公开技能或独立物理技能存在。

迁移到：

- 正式编排入口：`harness-orchestrator`
- 前端工程设计：`architecture-agent` 执行 `frontend-engineering-design`；领域模型变化回交后端或战略方
- 垂直切片合同：`yss-implementation-contract-compiler` 编译 Slice Implementation Contract 草案，由 Harness Orchestrator 批准

遇到旧调用或旧阶段资产时返回 `blocked`，引用 `harness-frontend-contract-v1`，由 Orchestrator 重新建立当前版本的联合上游输入、前端工程计划和 Slice Implementation Contract。不得创建同名兼容目录，也不得恢复需求、产品、商务或项目管理角色。

## yss-stage-decision

`yss-stage-decision` 已退役，不再作为 实现合同编译器 alias、默认发现入口或独立物理技能存在。

迁移到：

- 正式编排入口：`harness-orchestrator` 的 `harness-entry`
- 前端工程设计：`architecture-agent` 执行 `frontend-engineering-design`；领域模型变化回交后端或战略方

当前流程从已批准的上游 Spec / 战略设计进入 Harness Entry。遇到旧 Discovery / 战略设计调用或旧阶段资产时返回 `blocked`，引用 `harness-frontend-contract-v1` 并交回 Orchestrator。不得创建同名兼容目录，也不得恢复旧阶段决策包为现行路由。

## 前端专职技能裁剪（2026-09-08）

后端实现技能退出本地安装；跨端禁止与交接 ID 作为 `cross-repo-reference` 保留，不进入本地执行闭包。`yss-dto` 的 Java 实现不恢复，公开 wire profile 在 `yss-openapi-governance/references/` 中保留带来源绑定的只读快照。`yss-skill-source-index-refresh` 仅刷新已安装前端技能的文档入口，不再读取 Java 源仓或写后端索引。

## 2026-09-14：HTML 原型与 Provider 退役

`yss-antdv-next-design`、`yss-antd-design` 从当前技能、默认生成路线及分发中移除。新原型使用 `yss-prototype-stage` 的 html-css-js 适配器；历史原型、fact pack、截图及用户决定保持只读。在途继续演进时新建 HTML 工作版本，重新验证并确认；普通同步不直接删除消费项目的历史或用户修改资产。
