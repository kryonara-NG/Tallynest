import fs from "node:fs";
import path from "node:path";
const root=path.join(process.cwd(),"apps/web");
const skip=new Set(["node_modules",".next",".git","modules/ee"]);
function walk(dir){const out=[];for(const e of fs.readdirSync(dir,{withFileTypes:true})){if(skip.has(e.name))continue;const p=path.join(dir,e.name);if(e.isDirectory())out.push(...walk(p));else if(/\.(ts|tsx|js|mjs)$/.test(e.name))out.push(p)}return out}
for(const f of walk(root)){const s=fs.readFileSync(f,"utf8");const n=s.replaceAll("withAuditLogging","withActivityContext");if(n!==s)fs.writeFileSync(f,n)}
