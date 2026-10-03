'use client';
import { useState } from 'react';
import Image from 'next/image';
export function ProductImage({src,alt,className='',eager=false}) {
 return <ImageContent key={src} src={src} alt={alt} className={className} eager={eager}/>;
}
function ImageContent({src,alt,className,eager}) {
 const [failed,setFailed]=useState(!src);
 return failed ? <div className={`product-photo-pending ${className}`} role="img" aria-label={alt}><span className="material-symbols-outlined" aria-hidden="true">inventory_2</span><span>{alt}</span></div>
  : <Image className={className} src={src} alt={alt} width={640} height={640} sizes="(max-width: 520px) 50vw, (max-width: 820px) 90vw, (max-width: 1024px) 33vw, 25vw" loading={eager?'eager':'lazy'} onError={()=>setFailed(true)}/>;
}
