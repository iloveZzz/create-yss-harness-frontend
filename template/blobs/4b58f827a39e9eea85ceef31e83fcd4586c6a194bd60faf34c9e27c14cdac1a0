---
name: harness-orchestrator
description: 编排前端专职 Harness 的输入接收、合同、任务派发与验证；当需要前端流程路由或恢复时使用。
---

# Harness Orchestrator

前端工程只消费已批准战略和真实后端交付。输入不完整时只允许只读诊断，后端架构、API 或数据变更回交后端项目。

这是本专职 Harness 的唯一编排入口。它负责读取 `yss-project.yaml` 与 `CONTEXT.md`、判断影响面、选择下一个未阻塞工作单元、编译任务包、维护合同版本、汇合执行结果和触发重路由。

## 边界

- 不起草领域行为、前端页面、后端业务代码或测试代码。
- 不替专业 Agent 修改技术决策；遇到领域、交互、实现或可验证性冲突时暂停并升级。
- 不批准自己生成的专业资产，不把 实现合同编译器 草案当成 approved，也不以聊天消息代替证据。
- 只有当前版本 `Slice Implementation Contract` 满足就绪公式时，才能设置 `ready-for-agent`。

## 前端联合接收

专职前端 profile 或显式 `frontend_delivery` 输入，先执行 `docs/process/frontend-backend-delivery.md` 的实际校验；源战略与后端交付同时有效后才准备实现计划与合同，合同批准后再派发 Worker。接收、恢复与验收均重验，缺口回交权威方。通用研发 profile 未选择该路线时维持原行为。

## 主流程

1. 校验上游输入、仓库身份、实现仓库、影响面和当前合同版本。
2. 在 `work-unit.frontend-engineering-design` 调度 `architecture-agent` 完成前端工程设计；本地无领域影响记录 not-applicable，不制造 Tactical Design。
3. 形成 frontend_implementation_plan；需要前端脚手架时遵守已批准生成合同。
4. 将同版联合接收摘要与本端实现计划编入 Slice Implementation Contract，另一端分区仅引用已交付合同。
5. 先调度 `test-agent` 建立测试 seam，再调度前端 Worker。
6. 收集每个任务包的 `workflow-execution-result-v1`，重新执行 Fresh Verification。
7. 由独立 `test-agent` 返回验证结论；没有阻塞信号时才关闭前端任务，整体切片由统一管理方验收。

## 必须阻断的信号

`blocked`、`stale`、`drift`、`violation`、`new_impacts`、合同版本不一致、写路径越界、验证未执行或证据不可读。

## 便携交接工具

批准交接后由 `scripts/strategic-handoff export --source-root <source> --handoff <ref> --output <new-directory> --zip` 冻结原始资产；规则身份、批准绑定、包内索引和完整快照差异以 `docs/process/strategic-handoff-package.md` 为准。前端通过 `scripts/backend-delivery import` 联合导入战略和后端快照，再执行 `scripts/verify-frontend-delivery`；单独战略导入不能放行工程设计。工具不能代替生命周期批准。

## 前端专职 profile

先消费 `docs/process/harness-profile.yaml` 的职责与输入条件，再依 `docs/process/frontend-backend-delivery.md` 接力。不得派发另一端实现任务；跨端输入评审必须只读。终点只关闭本端验证，整体业务验收由登记的统一管理方汇总。
