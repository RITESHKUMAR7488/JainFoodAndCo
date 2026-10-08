import { notFound } from 'next/navigation';
import { categories } from '../../../data/products';
import { CategoryClient } from './ClientPage';
export function generateStaticParams(){return [...categories.map(({id})=>({category:id})),{category:'originals'}];}
export default async function Page({params}){const {category}=await params;if(category!=='originals'&&!categories.some(c=>c.id===category))notFound();return <CategoryClient category={category}/>;}
