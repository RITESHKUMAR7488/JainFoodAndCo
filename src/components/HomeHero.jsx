import Link from 'next/link';
import {HeroVideo} from './HeroVideo';
import {brandLogo} from '../lib/brandAssets';
import {business,callHref,whatsappHref,delivery} from '../lib/contact';

export function HomeHero(){return <>
 <section id="home-delivery" className="home-hero"><div className="container">
  <div className="home-hero-layout">
   <div className="home-hero-main">
    <div className="home-hero-copy"><div className="hero-brand"><img src={brandLogo} alt="" width="72" height="78"/><div><span className="hero-brand-name">Jain Desi &amp; Pure</span><span className="hero-brand-tagline">For healthier families.<br/>For generations to come.</span></div></div><span className="hero-kicker">Our vision · Bringing health at the forefront.</span><h1 className="hero-vision-title">We want every child to grow up with <em>better food.</em></h1><p>Food made with good ingredients, traditional wisdom and uncompromising care.</p><div className="hero-mission-note"><p>Making pure, wholesome everyday food accessible to more Indian families.</p><Link className="text-link" href="#mission">Discover our mission →</Link></div><div className="home-hero-actions"><Link className="btn btn-primary" href="/shop">Explore our products →</Link><a className="text-link" href={whatsappHref()} target="_blank" rel="noopener noreferrer">Enquire on WhatsApp ↗</a></div></div>
    <HeroVideo/>
   </div>
   <aside className="home-action-rail" aria-label="Delivery, store visits and custom atta">
    <article className="rail-delivery"><span className="material-symbols-outlined" aria-hidden="true">local_shipping</span><span className="eyebrow">Home delivery</span><h2>Free within <br/><strong>5 km.</strong></h2><p>Beyond 5 km? We deliver with a charge confirmed by our team.</p><div className="rail-atta-note"><strong>Fresh atta in 2 hours</strong><span>Central Noida · {delivery.minimum}</span></div><a href={callHref}>Call {business.displayPhone} ↗</a><a href={whatsappHref()} target="_blank" rel="noopener noreferrer">Chat on WhatsApp ↗</a></article>
    <Link className="rail-visit" href="#stores"><div><span className="eyebrow">Sector 122, Noida</span><h2>Come and see<br/>live processing.</h2><span className="rail-link">Visit our main store →</span></div><img src="/images/menu-cutouts/oils.png" alt="" width="64" height="76"/></Link>
    <Link className="rail-blend" href="/customize-atta"><img src="/images/menu-cutouts/attas.png" alt="" width="76" height="68"/><div><h2>Your grains.<br/>Your atta.</h2><span className="rail-link">Make your own blend →</span></div></Link>
   </aside>
  </div>
 </div></section>
 <nav className="home-purpose-strip" aria-label="Discover Jain Desi & Pure"><div className="container">{[['grain','Freshly milled atta','Made for everyday meals','/shop/attas'],['water_drop','Cold-pressed oils','Explore our In House collection','/shop/oils'],['visibility','See it being prepared','Live processing at Sector 122','/#process'],['diversity_3','Driven By Women','Care carried forward','/#women']].map(([icon,title,detail,href])=><Link href={href} key={title}><span className="material-symbols-outlined" aria-hidden="true">{icon}</span><span><strong>{title}</strong><small>{detail}</small></span><span aria-hidden="true">↗</span></Link>)}</div></nav>
 </>;}
