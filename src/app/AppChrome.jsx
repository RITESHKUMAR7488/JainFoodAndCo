'use client';
import {useState} from 'react';
import {usePathname} from 'next/navigation';
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';
import {SearchModal} from '../components/SearchModal';
import {PartnershipBubble} from '../components/PartnershipBubble';
import {stores} from '../lib/contact';
export function AppChrome({children}) {
 const [searchOpen,setSearchOpen]=useState(false),[searchQuery,setSearchQuery]=useState('');
 const pathname=usePathname();
 return <div className="app-shell"><a className="skip-link" href="#main-content">Skip to content</a><Header onSearch={query=>{setSearchQuery(query||'');setSearchOpen(true);}}/><main id="main-content">{children}</main><Footer partnershipPage={pathname==='/partnership'}/>{searchOpen&&<SearchModal initialQuery={searchQuery} onClose={()=>setSearchOpen(false)}/>}<PartnershipBubble/><a className="floating-whatsapp" href={`https://wa.me/${stores[0].phone}`} target="_blank" rel="noopener noreferrer" aria-label="Contact Jain Desi & Pure on WhatsApp"><span className="material-symbols-outlined" aria-hidden="true">chat</span><span>WhatsApp</span></a></div>;
}
