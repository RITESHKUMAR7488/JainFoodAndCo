'use client';
import {useRef,useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {brandLogo} from '../lib/brandAssets';
import {business,callHref} from '../lib/contact';
import {ExploreMenu} from './ExploreMenu';
export function Header({onSearch}) {
 const pathname=usePathname(),[open,setOpen]=useState(false),menuRef=useRef(null);
 const links=[['Home','/','home'],['Catalog','/shop','storefront'],['Partnership','/partnership','handshake'],['Contact','/contact','support_agent']];
 return <><div className="announcement"><Link href="/contact" className="announcement-link"><span className="announcement-track"><span>{business.delivery}</span><span aria-hidden="true">{business.delivery}</span></span></Link></div>
 <header className="site-header"><div className="container header-inner"><Link className="brand brand-original" href="/" aria-label="Jain Desi & Pure home"><img src={brandLogo} alt="Jain Desi & Pure"/></Link><nav className="nav" aria-label="Main navigation">{links.map(([label,href,icon])=>{
  const active=pathname===href||(href==='/shop'&&(pathname.startsWith('/shop/')||pathname.startsWith('/product/')));
  return <Link key={href} href={href} className={active?'active':''} aria-current={active?'page':undefined}><span className="material-symbols-outlined nav-icon" aria-hidden="true">{icon}</span><span>{label}</span></Link>;
 })}</nav><div className="header-actions"><button className="icon-btn" onClick={onSearch} aria-label="Search products"><span className="material-symbols-outlined" aria-hidden="true">search</span></button><a className="header-call" href={callHref} aria-label={`Call ${business.displayPhone}`}><span className="material-symbols-outlined" aria-hidden="true">call</span><span>{business.displayPhone}</span></a><button ref={menuRef} className="menu-btn explore-menu-trigger" aria-haspopup="dialog" aria-expanded={open} aria-label="Open menu" onClick={()=>setOpen(true)}><span className="material-symbols-outlined" aria-hidden="true">menu</span></button></div></div></header>{open&&<ExploreMenu onClose={()=>setOpen(false)} opener={menuRef}/>}</>;
}
