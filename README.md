# create-yss-harness-frontend

创建、接入和同步 `harness.frontend-delivery` 的治理资产。CLI 包内包含固定模板与公共核心，init / attach / sync 离线运行。不会生成业务运行时代码。

`0.1.2` 兼容通用技术设计交接协议，明确前端工程设计合同边界；npm 发布状态以 registry 为准。本地验收可用 `npm pack` 后的 tgz 安装。

```sh
npx create-yss-harness-frontend@latest init --target-dir ./my-project --project-name 我的项目
npx create-yss-harness-frontend@latest attach --target-dir ./existing-project
npx create-yss-harness-frontend@latest attach --target-dir ./existing-project --apply
npx create-yss-harness-frontend@latest sync --target-dir ./my-project
npx create-yss-harness-frontend@latest sync --target-dir ./my-project --apply
create-yss-harness-frontend update --dry-run
```

init 只接受不存在或空目录；`--dry-run` 不写入。attach / sync 默认预览，写入要求 `--apply`。治理冲突整次暂停，确认备份覆盖后可用 `--apply --force`。业务源码、构建文件、Git、子模块与越界路径不能强制接管。

仓内旧脚本生成的实例不受支持，不转换旧 metadata 或重建基线；其他 Harness 家族同样拒绝。已有新版实例使用 sync。

参数：`--project-name`、`--business-domain`、`--team-size`、`--issue-tracker local-markdown|github|gitlab`、`--git-init`（仅 init）、`--include-example-docs` / `--no-example-docs`、`--json`。程序升级命令 `update` / `upgrade` 只更新 CLI；npx、源码或未知安装方式输出安装指引。

每次应用保存 `.yss-harness-state/frontend/transactions/<id>/journal.json` 和原文件备份。失败自动恢复；进程中断时预览只诊断，下次 `--apply` 先恢复，再重新执行计划。恢复遇到后续修改会停下并保留恢复清单。成功后也保留备份，首版无独立 rollback 命令。状态目录应由项目自行排除 Git；CLI 不改已有 Git 配置。

JSON 协议版本 1：成功返回 `preview`、`applied`、`recovered`；错误退出码 1，含 `code` / `message`，冲突含完整 `changes` / `conflicts`。存在普通可应用更新的预览退出码为 0。

维护：先固定综合模板 core 与专职模板提交，运行 `pnpm sync-core <source-repo> <commit>` 和 `pnpm sync-template <source-repo> <commit>`，加 `--check` 只核验。`pnpm test` 完成后依次 `pnpm verify-bundle`、`npm pack` 和干净目录安装验收。来源锁和 blob 编码随包携带；不要手改生成文件。

公共核心 `0.1.1` 在 sync / attach 中保留已有 `CONTEXT.md`，包括 `--force`；缺失时才初始化。业务词汇的更新由项目自己的对账流程处理。
