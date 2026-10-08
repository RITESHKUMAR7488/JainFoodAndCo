import {categories} from '../data/products.js';
export const collections = ['oils','attas','spices','grains','pulses','seeds','sweeteners'].map(id=>categories.find(c=>c.id===id));
export function belongsToCollection(product,id) {
 return id==='all'||(id==='originals'?product.isOriginal:id==='oils'?['oils','ghee'].includes(product.category):product.category===id);
}
