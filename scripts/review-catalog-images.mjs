// Contact sheets for visual QA only; source product PNGs remain untouched.
import {mkdir,access} from 'node:fs/promises';
import sharp from 'sharp';
import {products} from '../src/data/products.js';
const root=new URL('../',import.meta.url);
const tasks=products.flatMap(p=>p.sizes.map(s=>({name:`${p.name} — ${s.label}`,path:s.image})));
const available=[];
for(const t of tasks){const url=new URL(`public${t.path}`,root);try{await access(url);available.push({...t,url});}catch{}}
const out=new URL('docs/verification/',root);await mkdir(out,{recursive:true});
for(let page=0;page<Math.ceil(available.length/24);page++){
 const batch=available.slice(page*24,(page+1)*24),parts=[];
 for(let i=0;i<batch.length;i++){
  const x=(i%4)*260,y=Math.floor(i/4)*300;
  const thumb=await sharp(await import('node:fs/promises').then(fs=>fs.readFile(batch[i].url))).resize(250,250,{fit:'contain',background:'#fcfaf6'}).png().toBuffer();
  parts.push({input:thumb,left:x+5,top:y});
  const safe=batch[i].name.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
  parts.push({input:Buffer.from(`<svg width="260" height="45"><text x="130" y="20" text-anchor="middle" font-family="Arial" font-size="11" fill="#173a2a" textLength="245" lengthAdjust="spacingAndGlyphs">${safe}</text></svg>`),left:x,top:y+252});
 }
 const sheet=await sharp({create:{width:1040,height:Math.ceil(batch.length/4)*300,channels:3,background:'#fcfaf6'}}).composite(parts).png().toBuffer();
 await import('node:fs/promises').then(fs=>fs.writeFile(new URL(`catalog-review-${page+1}.png`,out),sheet));
}
console.log(JSON.stringify({available:available.length,total:tasks.length,sheets:Math.ceil(available.length/24)}));
