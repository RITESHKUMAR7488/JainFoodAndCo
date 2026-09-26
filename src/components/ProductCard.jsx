import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
export const ProductCard = ({ product, onSelectProduct }) => {
  const { addItem } = useCart();
  const popular = product.sizes?.findIndex(s => s.popular);
  const [sizeIndex,setSizeIndex] = useState(popular >= 0 ? popular : 0);
  const size = product.sizes?.[sizeIndex] || {label:'Standard',price:product.price};
  return <article className="product-card" onClick={() => onSelectProduct(product.id)}>
    <div className="product-media">
      <img src={product.image} alt={product.name} loading="lazy"/>
      {product.badge && <span className="card-badge">{product.badge}</span>}
      <button className="quick-add" onClick={e => {e.stopPropagation();addItem(product,size,1);}} aria-label={`Add ${product.name}`}><span className="material-symbols-outlined">add</span></button>
    </div>
    <div className="product-copy">
      <div className="product-meta"><span>{product.categoryName}</span><span>★ {product.rating.toFixed(1)}</span></div>
      <h3>{product.name}</h3><p>{product.subheading}</p>
      <div className="size-row" onClick={e=>e.stopPropagation()}>{product.sizes?.map((s,i)=><button key={s.label} className={i===sizeIndex?'selected':''} onClick={()=>setSizeIndex(i)}>{s.label}</button>)}</div>
      <div className="product-bottom"><div><strong>₹{size.price}</strong>{product.originalPrice && <del>₹{Math.round(product.originalPrice/product.price*size.price)}</del>}</div><button className="text-link" onClick={e=>{e.stopPropagation();onSelectProduct(product.id)}}>View details <span>→</span></button></div>
    </div>
  </article>;
};
