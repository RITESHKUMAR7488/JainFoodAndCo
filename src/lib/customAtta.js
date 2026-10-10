import {products} from '../data/products.js';
import {enquiryHref} from './contact.js';
export const attaGrains=products.filter(p=>p.category==='attas'&&(['Wheat','Millet & Other Flours','Multigrain'].includes(p.group)||p.id==='chana-sattu')).map(p=>({id:p.id,name:p.name.replace(/\s+Atta$/,''),image:p.image}));
export function prepareAttaBlend(quantities){
 const grains=attaGrains.filter(g=>Object.hasOwn(quantities,g.id)).map(g=>({...g,grams:Number(quantities[g.id])}));
 if(!grains.length||grains.some(g=>!Number.isSafeInteger(g.grams)||g.grams<=0))return null;
 const total=grains.reduce((sum,g)=>sum+g.grams,0);
 if(!Number.isSafeInteger(total))return null;
 const message=`Hello Jain Desi & Pure, I would like to enquire about this custom atta blend:\n${grains.map(g=>`- ${g.name}: ${g.grams} g`).join('\n')}\nTotal: ${total} g.\nPlease confirm blend availability, pricing, preparation time and delivery to my area.`;
 return {grains,total,href:enquiryHref(message)};
}
