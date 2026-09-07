import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
const root=fileURLToPath(new URL('..',import.meta.url));
test('固定包契约、真实模板计划零写入和旧实例拒绝',t=>{
 const scratch=fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(),'create-yss-harness-frontend-')));t.after(()=>fs.rmSync(scratch,{recursive:true,force:true}));
 const target=path.join(scratch,'project');
 const run=(...args)=>spawnSync(process.execPath,[path.join(root,'bin/create-yss-harness-frontend.js'),...args,'--json'],{encoding:'utf8',maxBuffer:32*1024*1024});
 const verify=spawnSync(process.execPath,[path.join(root,'scripts/verify-bundle.mjs')],{encoding:'utf8'});assert.equal(verify.status,0,verify.stderr);
 let r=run('init','--target-dir',target,'--project-name','验收实例','--dry-run');assert.equal(r.status,0,r.stderr);
 const plan=JSON.parse(r.stdout);assert.equal(plan.status,'preview');assert.equal(fs.existsSync(target),false);
 assert.ok(plan.changes.some(x=>x.path==='scripts/repository-mode'));assert.ok(plan.changes.some(x=>x.path==='docs/process/harness-profile.yaml'));assert.ok(!plan.changes.some(x=>x.path==='scripts/instantiate-harness'));
 fs.mkdirSync(target);const metadata=path.join(target,'.yss-harness-frontend.json');fs.writeFileSync(metadata,'{"schema_version":1}');
 r=run('attach','--target-dir',target,'--apply','--force');assert.equal(r.status,1);assert.equal(JSON.parse(r.stdout).code,'LEGACY');assert.deepEqual(fs.readdirSync(target),['.yss-harness-frontend.json']);
});
