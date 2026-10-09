'use client';
import { useState } from 'react';
import Image from 'next/image';
export function ProductImage({src,alt,className='',eager=false,sizes='(max-width: 820px) 90vw, (max-width: 1024px) 33vw, 25vw'}) {
 return <ImageContent key={src} src={src} alt={alt} className={className} eager={eager} sizes={sizes}/>;
}
function ImageContent({src,alt,className,eager,sizes}) {
 const [failed,setFailed]=useState(!src);
 return failed ? <div className={`product-photo-pending ${className}`} role="img" aria-label={alt}><span className="material-symbols-outlined" aria-hidden="true">inventory_2</span><span>{alt}</span></div>
  : <Image unoptimized={src.endsWith(".webp")} className={className} src={src} alt={alt} width={640} height={640} sizes={sizes} loading={eager?'eager':'lazy'} onError={()=>setFailed(true)}/>;
}
