import {readFile} from 'node:fs/promises';
import sharp from 'sharp';
import {products} from '../src/data/products.js';
const root=new URL('../public/',import.meta.url);
const paths=products.flatMap(p=>p.sizes.map(s=>s.image));
const issues=[];
let bytes=0;
for(const path of paths){
 try{
  const buffer=await readFile(new URL(path.slice(1),root));
  const metadata=await sharp(buffer).metadata();
  await sharp(buffer).stats();
  if(metadata.format!=='png'||metadata.width!==metadata.height||metadata.width<600)issues.push({path,error:'Expected square PNG of at least 600 px'});
  bytes+=buffer.length;
 }catch(error){issues.push({path,error:error.message});}
}
console.log(JSON.stringify({products:products.length,images:paths.length,megabytes:Math.round(bytes/1024/1024),issues},null,2));
if(issues.length)process.exitCode=1;
