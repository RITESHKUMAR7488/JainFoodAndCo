import { notFound } from 'next/navigation';
import { products } from '../../../data/products';
import { ProductClient } from './ClientPage';
export function generateStaticParams(){return products.map(({id})=>({id}));}
export default async function Page({params}){const {id}=await params;if(!products.some(p=>p.id===id))notFound();return <ProductClient id={id}/>;}
