import Link from 'next/link';
import {brandLogo} from '../lib/brandAssets';
import {categories} from '../data/products';
import {business,callHref,whatsappHref} from '../lib/contact';
export function Footer() {
 return <footer className="footer"><div className="container footer-grid"><div className="footer-brand"><Link href="/"><img src={brandLogo} alt="Jain Desi & Pure"/></Link><p>Traditional staples for everyday Indian kitchens.</p><p>{business.delivery}</p></div>
  <div><h2>Collections</h2>{categories.map(c=><Link key={c.id} href={`/shop/${c.id}`}>{c.name}</Link>)}</div>
  <div><h2>Discover</h2><Link href="/originals">Jain Originals</Link><Link href="/our-process">Our process</Link><Link href="/farmers">Our people</Link><Link href="/purity">Purity promise</Link></div>
  <div><h2>Visit or contact us</h2><p>{business.address}</p><p>{business.hours}</p><a href={callHref}>{business.displayPhone}</a><a href={whatsappHref()} target="_blank" rel="noopener noreferrer">Chat on WhatsApp ↗</a><Link href="/contact">Contact & delivery →</Link></div>
 </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Jain Desi &amp; Pure</span><span>Made with respect for grain, soil and craft.</span></div></footer>;
}
