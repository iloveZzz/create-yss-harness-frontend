import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync, readFileSync, rmSync, existsSync, realpathSync} from 'node:fs';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';

test('真实初始化同时交付视觉规范源与主题快照', t => {
  const root = fileURLToPath(new URL('..', import.meta.url));
  const scratch = realpathSync(mkdtempSync(path.join(tmpdir(), 'frontend-design-baseline-')));
  t.after(() => rmSync(scratch, {recursive: true, force: true}));
  const target = path.join(scratch, 'project');
  const result = spawnSync(process.execPath, [
    path.join(root, 'bin/create-yss-harness-frontend.js'), 'init',
    '--target-dir', target, '--project-name', '主题分发验证', '--json',
  ], {encoding: 'utf8', timeout: 120000, maxBuffer: 32 * 1024 * 1024});
  assert.equal(result.status, 0, result.stderr || result.error?.message);
  const snapshot = JSON.parse(readFileSync(path.join(root, 'template.snapshot.json'), 'utf8'));
  for (const ref of [
    'DESIGN.md', '.template-spec/design/design.md', '.template-spec/design/tokens/theme.json',
    '.template-spec/design/tokens/tokens.default.json', '.template-spec/design/tokens/variables.css',
    '.template-spec/design/templates/prototype-evidence-template.yaml',
    '.template-spec/design/templates/visual-baseline-template.yaml',
  ]) {
    assert.ok(existsSync(path.join(target, ref)), `初始化缺少设计资产: ${ref}`);
    const actual = createHash('sha256').update(readFileSync(path.join(target, ref))).digest('hex');
    assert.equal(actual, snapshot.files[ref]?.digest, `设计资产与分发快照不一致: ${ref}`);
  }
});
