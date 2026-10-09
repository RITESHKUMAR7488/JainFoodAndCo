'use client';
import {useRef,useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {brandLogo} from '../lib/brandAssets';
import {business,callHref} from '../lib/contact';
import {ExploreMenu} from './ExploreMenu';
import {HeaderSearch} from './HeaderSearch';
export function Header({onSearch}) {
 const pathname=usePathname(),[open,setOpen]=useState(false),menuRef=useRef(null);
 const links=[['Home','/','home'],['Our Products','/shop','storefront'],['Customize Atta','/shop/attas#custom-atta','grain'],['Partnership','/partnership','handshake'],['Contact','/contact','support_agent']];
 return <><header className="site-header storefront-header"><div className="container header-inner"><div className="header-top"><Link className="brand brand-original" href="/" aria-label="Jain Desi & Pure home"><img src={brandLogo} alt="Jain Desi & Pure"/></Link><HeaderSearch onSearch={onSearch}/><div className="header-actions"><a className="header-call" href={callHref} aria-label={`Call ${business.displayPhone}`}><span className="material-symbols-outlined" aria-hidden="true">call</span><span>{business.displayPhone}</span></a><button ref={menuRef} className="menu-btn explore-menu-trigger" aria-haspopup="dialog" aria-expanded={open} aria-label="Open menu" onClick={()=>setOpen(true)}><span className="material-symbols-outlined" aria-hidden="true">menu</span></button></div></div><div className="header-bottom"><nav className="nav" aria-label="Main navigation">{links.map(([label,href,icon])=>{
  const active=pathname===href||(href==='/shop'&&(pathname.startsWith('/shop/')||pathname.startsWith('/product/')));
  return <Link key={href} href={href} className={active?'active':''} aria-current={active?'page':undefined}><span className="material-symbols-outlined nav-icon" aria-hidden="true">{icon}</span><span>{label}</span></Link>;
 })}</nav><div className="header-delivery"><p><span className="material-symbols-outlined" aria-hidden="true">local_shipping</span><span><strong>Free delivery within 5 km.</strong> Charges apply beyond 5 km.</span></p><p><span className="material-symbols-outlined" aria-hidden="true">schedule</span><span>Get our products in <strong>2 hours</strong> in Central Noida.<br className="delivery-break"/> Minimum order: <strong>₹1,000, including atta.</strong></span></p></div></div></div></header>{open&&<ExploreMenu onClose={()=>setOpen(false)} opener={menuRef}/>}</>;
}
