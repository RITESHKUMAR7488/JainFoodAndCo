'use client';
import {useEffect,useRef,useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {brandLogo} from '../lib/brandAssets';
import {business,callHref,delivery} from '../lib/contact';
export function Header({onSearch}) {
 const pathname=usePathname(),[open,setOpen]=useState(false),navRef=useRef(null),menuRef=useRef(null),headerRef=useRef(null);
 useEffect(()=>{document.body.style.overflow=open?'hidden':'';return()=>{document.body.style.overflow='';};},[open]);
 useEffect(()=>{if(!open)return;const nav=navRef.current;const position=()=>{if(window.innerWidth>820){setOpen(false);return;}const top=headerRef.current.getBoundingClientRect().bottom;nav.style.top=`${top}px`;nav.style.height=`calc(100dvh - ${top}px)`;};position();window.addEventListener('resize',position);navRef.current?.querySelector('a')?.focus();const escape=e=>{if(e.key==='Escape'){setOpen(false);menuRef.current?.focus();}if(e.key==='Tab'){const nodes=[...navRef.current.querySelectorAll('a'),menuRef.current];if(e.shiftKey&&document.activeElement===nodes[0]){e.preventDefault();nodes.at(-1).focus();}else if(!e.shiftKey&&document.activeElement===nodes.at(-1)){e.preventDefault();nodes[0].focus();}}};window.addEventListener('keydown',escape);return()=>{window.removeEventListener('keydown',escape);window.removeEventListener('resize',position);nav.style.removeProperty('top');nav.style.removeProperty('height');};},[open]);
 const links=[['Home','/'],['Catalog','/shop'],['About Us','/about'],['Partnership','/partnership'],['Contact','/contact']];
 return <><div className="announcement"><Link href="/contact" className="announcement-link"><span className="announcement-track"><span>{business.delivery} · {delivery.free}</span><span aria-hidden="true">{business.delivery} · {delivery.free}</span></span></Link></div>
  <header ref={headerRef} className="site-header"><div className="container header-inner"><Link className="brand brand-original" href="/" onClick={()=>setOpen(false)} aria-label="Jain Desi & Pure home"><img src={brandLogo} alt="Jain Desi & Pure"/></Link>
   <nav ref={navRef} id="main-navigation" className={`nav ${open?'open':''}`} aria-label="Main navigation">{links.map(([label,href])=><Link key={href} href={href} className={pathname===href?'active':''} aria-current={pathname===href?'page':undefined} onClick={()=>setOpen(false)}>{label}</Link>)}</nav>
   <div className="header-actions"><button className="icon-btn" onClick={onSearch} aria-label="Search products"><span className="material-symbols-outlined" aria-hidden="true">search</span></button><a className="header-call" href={callHref} aria-label={`Call ${business.displayPhone}`}><span className="material-symbols-outlined" aria-hidden="true">call</span><span>Call us</span></a><button ref={menuRef} className="menu-btn" aria-controls="main-navigation" aria-expanded={open} aria-label={open?'Close menu':'Open menu'} onClick={()=>setOpen(!open)}><span className="material-symbols-outlined" aria-hidden="true">{open?'close':'more_vert'}</span></button></div>
  </div></header></>;
}
