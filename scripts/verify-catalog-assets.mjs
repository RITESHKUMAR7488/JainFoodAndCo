import {readFile} from 'node:fs/promises';
import sharp from 'sharp';
import {products} from '../src/data/products.js';
const root=new URL('../public/',import.meta.url);
const references=products.flatMap(p=>p.sizes.map(s=>s.image));
const paths=[...new Set(references)];
const issues=[];
let bytes=0;
for(const path of paths){
 try{
  const buffer=await readFile(new URL(path.slice(1),root));
  const metadata=await sharp(buffer).metadata();
  await sharp(buffer).stats();
  if(!['png','webp'].includes(metadata.format)||metadata.width!==metadata.height||metadata.width<600)issues.push({path,error:'Expected square PNG or WebP of at least 600 px'});
  bytes+=buffer.length;
 }catch(error){issues.push({path,error:error.message});}
}
const hero=await sharp(await readFile(new URL('images/delivery-hero.png',root))).metadata();
if(hero.width<600||hero.height<600)issues.push({path:'/images/delivery-hero.png',error:'Hero must be at least 600 px in both dimensions'});
console.log(JSON.stringify({products:products.length,packReferences:references.length,images:paths.length,hero:{width:hero.width,height:hero.height},megabytes:Math.round(bytes/1024/1024),issues},null,2));
if(issues.length)process.exitCode=1;
