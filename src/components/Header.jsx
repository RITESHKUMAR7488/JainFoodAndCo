'use client';
import {useRef,useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
const brandLogo = '/images/jain-logo-transparent.png';
import {business,callHref} from '../lib/contact';
import {ExploreMenu} from './ExploreMenu';
import {HeaderSearch} from './HeaderSearch';
const headerDeliveryAnnouncement='Free delivery within 5 km; charges applicable beyond · Enjoy 2-hour delivery in Central Noida for orders above ₹1,000, including atta.';
export function Header({onSearch}) {
 const pathname=usePathname(),[open,setOpen]=useState(false),menuRef=useRef(null);
 const links=[['Home','/','home'],['Our Products','/shop','storefront'],['Customize Atta','/customize-atta','grain'],['Partnership','/partnership','handshake'],['Contact','/contact','support_agent']];
 return <><div className="announcement"><Link href="/contact" className="announcement-link"><span className="announcement-track"><span>{headerDeliveryAnnouncement}</span><span aria-hidden="true">{headerDeliveryAnnouncement}</span></span></Link></div><header className="site-header storefront-header"><div className="container header-inner"><div className="header-top"><Link className="brand brand-original" href="/" aria-label="Jain Desi & Pure home"><img src={brandLogo} alt="Jain Desi & Pure"/></Link><HeaderSearch onSearch={onSearch}/><div className="header-actions"><a className="header-call" href={callHref} aria-label={`Call ${business.displayPhone}`}><span className="material-symbols-outlined" aria-hidden="true">call</span><span>{business.displayPhone}</span></a><button ref={menuRef} className="menu-btn explore-menu-trigger" aria-haspopup="dialog" aria-expanded={open} aria-label="Open menu" onClick={()=>setOpen(true)}><span className="material-symbols-outlined" aria-hidden="true">menu</span></button></div></div><div className="header-bottom"><nav className="nav" aria-label="Main navigation">{links.map(([label,href,icon])=>{
  const active=pathname===href||(href==='/shop'&&(pathname.startsWith('/shop/')||pathname.startsWith('/product/')));
  return <Link key={href} href={href} className={[active?'active':'',href==='/partnership'?'nav-partnership-highlight':''].filter(Boolean).join(' ')} aria-current={active?'page':undefined}><span className="material-symbols-outlined nav-icon" aria-hidden="true">{icon}</span><span>{label}</span></Link>;
 })}</nav><div className="header-delivery"><p><span className="material-symbols-outlined" aria-hidden="true">local_shipping</span><span><strong>Free delivery within 5 km;</strong> charges applicable beyond</span></p><p><span className="material-symbols-outlined" aria-hidden="true">schedule</span><span>Enjoy <strong>2-hour delivery</strong> in Central Noida for orders <strong>above ₹1,000, including atta.</strong></span></p></div></div></div></header><nav className="mobile-bottom-nav" aria-label="Mobile navigation">{links.map(([label,href,icon])=>{const active=pathname===href||(href==='/shop'&&(pathname.startsWith('/shop/')||pathname.startsWith('/product/')));return <Link key={href} href={href} aria-current={active?'page':undefined}><span className="material-symbols-outlined" aria-hidden="true">{icon}</span><span>{label==='Our Products'?'Products':label==='Customize Atta'?'Customize':label}</span></Link>;})}</nav>{open&&<ExploreMenu onClose={()=>setOpen(false)} opener={menuRef}/>}</>;
}
