'use client';
import {useState} from 'react';
import Link from 'next/link';
import {priceText} from '../data/products';
import {whatsappHref} from '../lib/contact';
import {ProductImage} from './ProductImage';
import {PriceNotice} from './PriceNotice';
export function ProductCard({product}) {
 const [index,setIndex]=useState(0);
 const size=product.sizes[index];
 return <article className="product-card">
  <Link href={`/product/${product.id}`} className="product-media" aria-label={`View ${product.name}`}>
   <ProductImage src={size.image} alt={`${product.name}${size.confirmedSize?' — '+size.label:''}`}/>
   {product.isOriginal && <span className="card-badge">In House</span>}
  </Link>
  <div className="product-copy">
   <div className="product-meta"><span>{product.group}</span></div>
   <h3><Link href={`/product/${product.id}`}>{product.name}</Link></h3>
   <div className="size-row" role="group" aria-label={`Pack size for ${product.name}`}>{product.sizes.map((s,i)=><button type="button" key={s.label} aria-pressed={i===index} className={i===index?'selected':''} onClick={()=>setIndex(i)}>{s.label}</button>)}</div>
   <div className="product-bottom"><strong>{priceText(size.price)}</strong><Link className="text-link" href={`/product/${product.id}`}>Details →</Link></div>
   <PriceNotice/>
   <a className="btn btn-primary card-enquiry" href={whatsappHref(product,size)} target="_blank" rel="noopener noreferrer" aria-label={`Enquire about ${product.name} on WhatsApp`}>Enquire on WhatsApp ↗</a>
  </div>
 </article>;
}
