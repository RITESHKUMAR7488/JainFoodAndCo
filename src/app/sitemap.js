import {products,categories} from '../data/products';
const base='https://jain-food-and-co.vercel.app';
export default function sitemap(){return ['','/shop','/shop/originals','/partnership','/contact','/purity',...categories.map(c=>`/shop/${c.id}`),...products.map(p=>`/product/${p.id}`)].map(path=>({url:base+path}));}
