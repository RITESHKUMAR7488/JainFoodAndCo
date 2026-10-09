'use client';
import {useState} from 'react';
import Link from 'next/link';
import {products,priceText} from '../data/products';
import {callHref,whatsappHref} from '../lib/contact';
import {DeliveryDetails} from '../components/DeliveryDetails';
import {ProductCard} from '../components/ProductCard';
import {ProductImage} from '../components/ProductImage';
export function ProductDetailPage({productId}) {
 const product=products.find(p=>p.id===productId);
 return product?<ProductContent key={product.id} product={product}/>:<div className="container section"><h1>Product not found</h1><Link href="/shop">Browse the catalog</Link></div>;
}
function ProductContent({product}) {
 const [index,setIndex]=useState(0),[quantity,setQuantity]=useState(1);
 const size=product.sizes[index];
 const related=products.filter(p=>p.category===product.category&&p.id!==product.id).slice(0,3);
 return <div className="container product-page">
  <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href={`/shop/${product.category}`}>{product.categoryName}</Link><span>/</span><span>{product.name}</span></nav>
  <section className="contact-product-grid">
   <div className="detail-photo"><ProductImage src={size.image} alt={`${product.name}${size.confirmedSize?' — '+size.label:''}`} eager sizes="(max-width: 820px) 90vw, 50vw"/></div>
   <div className="detail-copy"><span className="eyebrow">{product.isOriginal?'In House':product.categoryName}</span><h1>{product.name}</h1><p>{product.description}</p>
    <p className="detail-price" aria-live="polite">{priceText(size.price)}{typeof size.price==='number'&&<small> / {size.label}</small>}</p>
    <fieldset className="pack-field"><legend>Choose your pack</legend><div className="size-row">{product.sizes.map((s,i)=><button key={s.label} type="button" aria-pressed={i===index} className={i===index?'selected':''} onClick={()=>setIndex(i)}>{s.label}</button>)}</div></fieldset>
    <label className="quantity-label">Number of packs <input type="number" min="1" max="99" value={quantity} onChange={e=>setQuantity(Math.min(99,Math.max(1,Number(e.target.value)||1)))}/></label>
    <div className="detail-actions"><a className="btn btn-primary" href={whatsappHref(product,size,quantity)} target="_blank" rel="noopener noreferrer">Enquire on WhatsApp ↗</a><a className="btn btn-quiet" href={callHref}>Call the store</a></div>
    <div className="delivery-note"><span className="material-symbols-outlined" aria-hidden="true">local_shipping</span><DeliveryDetails/></div>
    <p className="contact-caption">WhatsApp opens a prepared enquiry. You review and send the message.</p>
    <Link className="text-link" href="/contact">Store details & contact →</Link>
   </div>
  </section>
  <section className="section"><div className="section-head"><h2>More from this collection</h2><Link className="text-link" href={`/shop/${product.category}`}>Explore {product.categoryName.toLowerCase()} →</Link></div><div className="products-grid">{related.map(p=><ProductCard key={p.id} product={p}/>)}</div></section>
 </div>;
}
