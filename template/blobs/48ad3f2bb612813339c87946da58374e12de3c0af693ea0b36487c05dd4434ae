# OpenAPI 治理步骤

仅在入口所列条件命中时读取本文件。Markdown 链接相对本文件；行内 references/assets/schemas 路径相对 Skill 根目录。仓库脚本与 pnpm 命令从当前登记的项目根目录执行。

## 治理流程

1. **建立或读取 YAML Draft**
   - 读取 Spec、产品设计 / 状态矩阵、架构约束和既有 Freeze 记录。
   - 在 `docs/.scratch/<feature>/api/<feature>.yaml` 创建或更新单一 OAS 3.1 文档；生命周期状态写入相邻 Markdown 记录，不写入 YAML 前置元数据。
   - 所有操作使用稳定、可生成客户端的 `operationId`；页面动作可通过 `x-yss-action-key` 或同路径的追踪矩阵关联。

2. **运行结构与治理校验**
   - 先执行项目锁定的 `pnpm exec redocly lint` 或等价 CI 脚本。
   - 检查 YAML 可解析、`$ref` 可解析、路径参数完整、operationId 唯一、examples 合法、schema 命名稳定。
   - 先运行 `scripts/verify-yss-dto-openapi-profile`，并记录 profile 版本；检查 `/api/v1/` 版本策略（或记录例外）、`x-yss-response-wrapper`、`YssResultMeta` + `allOf` 具体 schema、统一错误结构、分页、幂等 / 乐观锁和契约测试 seam。
   - 每个响应都必须落成具体 endpoint schema：`SingleResult` 的 `data` 是具体对象或显式 nullable schema，`MultiResult` / `PageResult` 的 `data` 是数组；Java 的 `SingleResult<T>` / `PageResult<T>` 只能作为语义说明，不能直接写成 OAS type 或 `$ref`。
   - `code` 按 profile 只允许 `string | integer | null`，`dataType` 按 profile 为 `string | null`；`offset`、`needTotalCount`、`tempTotalCount` 不得进入客户端分页输入；`totalPages` 只有目标 HTTP mapper / fixture 证明后才能进入契约。Spec 明确改变认证或授权行为时，把对应 `401` / `403`、资源过滤和错误语义作为普通 API 行为检查。

3. **独立 Draft Review 与 Freeze**
   - 将 fresh lint 证据交给 `yss-openapi-draft-review`；阻断项未关闭前，YAML 仍是 review-only Draft，不得生成生产客户端。
   - Freeze 记录必须引用 YAML 路径、Git ref（如适用）和 YAML SHA-256。冻结后 API 行为变更必须先回到 YAML Draft 与审查。

4. **从冻结 YAML 派生 JSON**
   - 使用 [锁定工具链](locked-toolchain.md) 中的 `redocly bundle` 命令生成 `docs/.scratch/<feature>/api/<feature>.json`，JSON 不纳入人工编辑面。
   - 对输出 JSON 重新执行解析 / lint（按项目工具链），确认 bundle 未产生组件重名冲突或无法解析的引用。
   - 写入 `docs/.scratch/<feature>/api/<feature>-json-export.md`，可从 `.template-spec/api/templates/openapi-json-export-record-template.md` 创建。
   - 记录 YAML SHA-256、JSON SHA-256、OAS 版本、Redocly CLI 版本与 lockfile 引用、完整命令、metafile、`$ref` 例外以及结果。

5. **交给下游前端**
   - 仅当 Freeze、JSON 派生记录和 JSON 校验均通过时，才把派生 JSON 交给 `yss-api-integration` 与目标前端实现仓库。
   - JSON 的治理产物固定为 `docs/.scratch/<feature>/api/<feature>.json`。跨仓库时只能由批准的 Cross-repo 子合同或项目脚本将同一字节内容物化为 `<frontend>/openapi/openapi.json`，并记录两端相同的 SHA-256 与交接路径。
   - 本模板不读取、修改或验证目标前端项目的客户端生成配置，不执行客户端生成，也不把生成动作加入 CI；目标前端项目在需要时手动运行其既有代码生成命令。
   - 接口调整回写 YAML，而不是编辑 JSON 或生成的 TypeScript。
