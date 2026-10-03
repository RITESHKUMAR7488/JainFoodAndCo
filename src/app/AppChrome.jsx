'use client';
import {useState} from 'react';
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';
import {SearchModal} from '../components/SearchModal';
import {whatsappHref} from '../lib/contact';
export function AppChrome({children}) {
 const [searchOpen,setSearchOpen]=useState(false);
 return <div className="app-shell"><a className="skip-link" href="#main-content">Skip to content</a><Header onSearch={()=>setSearchOpen(true)}/><main id="main-content">{children}</main><Footer/>{searchOpen&&<SearchModal onClose={()=>setSearchOpen(false)}/>}<a className="floating-whatsapp" href={whatsappHref()} target="_blank" rel="noopener noreferrer" aria-label="Contact Jain Desi & Pure on WhatsApp"><span className="material-symbols-outlined" aria-hidden="true">chat</span><span>WhatsApp</span></a></div>;
}
