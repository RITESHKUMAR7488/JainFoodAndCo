import {products} from '../data/products.js';
export function searchProducts(query){
 const term=query.trim().toLowerCase();
 if(!term)return products;
 const rank=p=>p.name.toLowerCase().includes(term)?0:p.group.toLowerCase().includes(term)?1:2;
 return products.filter(p=>`${p.name} ${p.group} ${p.categoryName}`.toLowerCase().includes(term)).sort((a,b)=>rank(a)-rank(b));
}
