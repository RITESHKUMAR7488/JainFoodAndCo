'use client';
import {useRef,useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {brandLogo} from '../lib/brandAssets';
import {business,callHref} from '../lib/contact';
import {ExploreMenu} from './ExploreMenu';
export function Header({onSearch}) {
 const pathname=usePathname(),[open,setOpen]=useState(false),menuRef=useRef(null);
 const links=[['Home','/'],['Catalog','/shop'],['Partnership','/partnership'],['About Us','/about'],['Contact','/contact']];
 return <><div className="announcement"><Link href="/contact" className="announcement-link"><span className="announcement-track"><span>{business.delivery}</span><span aria-hidden="true">{business.delivery}</span></span></Link></div>
 <header className="site-header"><div className="container header-inner"><Link className="brand brand-original" href="/" aria-label="Jain Desi & Pure home"><img src={brandLogo} alt="Jain Desi & Pure"/></Link><nav className="nav" aria-label="Main navigation">{links.map(([label,href])=><Link key={href} href={href} className={pathname===href?'active':''} aria-current={pathname===href?'page':undefined}>{label}</Link>)}</nav><div className="header-actions"><button className="icon-btn" onClick={onSearch} aria-label="Search products"><span className="material-symbols-outlined" aria-hidden="true">search</span></button><a className="header-call" href={callHref} aria-label={`Call ${business.displayPhone}`}><span className="material-symbols-outlined" aria-hidden="true">call</span><span>Call us</span></a><button ref={menuRef} className="menu-btn explore-menu-trigger" aria-haspopup="dialog" aria-expanded={open} aria-label="Open menu" onClick={()=>setOpen(true)}><span className="material-symbols-outlined" aria-hidden="true">menu</span></button></div></div></header>{open&&<ExploreMenu onClose={()=>setOpen(false)} opener={menuRef}/>}</>;
}
