'use client';
import {useEffect,useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {brandLogo} from '../lib/brandAssets';
import {business,callHref} from '../lib/contact';
export function Header({onSearch}) {
 const pathname=usePathname(),[open,setOpen]=useState(false);
 useEffect(()=>{document.body.style.overflow=open?'hidden':'';return()=>{document.body.style.overflow='';};},[open]);
 useEffect(()=>{if(!open)return;const escape=e=>{if(e.key==='Escape')setOpen(false);};window.addEventListener('keydown',escape);return()=>window.removeEventListener('keydown',escape);},[open]);
 const links=[['Catalog','/shop'],['Originals','/originals'],['Our process','/our-process'],['Our people','/farmers'],['Contact','/contact']];
 return <><div className="announcement"><span>{business.delivery}</span></div>
  <header className="site-header"><div className="container header-inner"><Link className="brand brand-original" href="/" onClick={()=>setOpen(false)} aria-label="Jain Desi & Pure home"><img src={brandLogo} alt="Jain Desi & Pure"/></Link>
   <nav className={`nav ${open?'open':''}`} aria-label="Main navigation">{links.map(([label,href])=><Link key={href} href={href} className={pathname===href?'active':''} aria-current={pathname===href?'page':undefined} onClick={()=>setOpen(false)}>{label}</Link>)}</nav>
   <div className="header-actions"><button className="icon-btn" onClick={onSearch} aria-label="Search products"><span className="material-symbols-outlined" aria-hidden="true">search</span></button><a className="header-call" href={callHref}><span className="material-symbols-outlined" aria-hidden="true">call</span><span>Call us</span></a><button className="menu-btn" aria-expanded={open} aria-label={open?'Close menu':'Open menu'} onClick={()=>setOpen(!open)}><span className="material-symbols-outlined" aria-hidden="true">{open?'close':'menu'}</span></button></div>
  </div></header></>;
}
