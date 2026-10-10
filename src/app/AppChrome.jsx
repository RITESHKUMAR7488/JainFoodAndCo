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
 return <div className="app-shell"><a className="skip-link" href="#main-content">Skip to content</a><Header onSearch={query=>{setSearchQuery(query||'');setSearchOpen(true);}}/><main id="main-content">{children}</main><Footer partnershipPage={pathname==='/partnership'}/>{searchOpen&&<SearchModal initialQuery={searchQuery} onClose={()=>setSearchOpen(false)}/>}<PartnershipBubble/><a className="floating-whatsapp" href={`https://wa.me/${stores[0].phone}`} target="_blank" rel="noopener noreferrer" aria-label="Contact Jain Desi & Pure on WhatsApp"><svg className="whatsapp-brand-icon" viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.85 11.85 0 0 0 12.03 0C5.43 0 .06 5.37.06 11.97c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.62a11.93 11.93 0 0 0 5.85 1.49h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.24-6.21-3.49-8.42zM12.03 21.85a9.91 9.91 0 0 1-5.06-1.38l-.36-.21-3.67.96.98-3.58-.24-.37a9.9 9.9 0 0 1-1.52-5.3c0-5.49 4.47-9.96 9.97-9.96a9.89 9.89 0 0 1 7.04 2.92 9.9 9.9 0 0 1 2.91 7.05c0 5.49-4.47 9.96-9.95 9.96zm5.47-7.45c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.09 4.5.71.3 1.26.48 1.69.62.71.22 1.35.19 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/></svg><span>WhatsApp</span></a></div>;
}
