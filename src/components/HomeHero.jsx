import Link from 'next/link';
import {HeroVideo} from './HeroVideo';
import {callHref,stores} from '../lib/contact';

const benefits=[['eco','Chemical Free','No unnecessary chemicals or additives'],['nutrition','Wholesome Nutrition','Everyday food you can trust'],['diversity_3','For Healthier Families','Starting with those who matter most'],['all_inclusive','For Generations to Come','Better food today, healthier tomorrow']];
export function HomeHero(){return <section id="home-delivery" className="home-hero home-hero-refreshed"><div className="container"><div className="home-hero-main">
 <div className="home-hero-copy"><span className="eyebrow">Pure food for healthier families</span><h1 className="hero-vision-title"><span>We want every child to grow up</span><span>with <em>better food.</em></span></h1><p>Food made with good ingredients, traditional wisdom and uncompromising care.</p>
 <div className="hero-benefits">{benefits.map(([icon,title,detail])=><div key={title}><span className="material-symbols-outlined" aria-hidden="true">{icon}</span><strong>{title}</strong><small>{detail}</small></div>)}</div>
 <div className="hero-service-cards"><Link href="/contact#delivery"><span className="material-symbols-outlined" aria-hidden="true">local_shipping</span><div><strong>2-hour delivery</strong><small>In Central Noida for orders above ₹1,000, including atta.</small></div></Link><Link href="/contact#delivery"><span className="material-symbols-outlined" aria-hidden="true">location_on</span><div><strong>Free delivery within 5 km</strong><small>Charges applicable beyond.</small></div></Link><a href={stores[0].map} target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined" aria-hidden="true">storefront</span><div><strong>Visit our store</strong><small>Sector 122, Noida · Witness live processing.</small></div></a></div>
 <div className="hero-contact-bar"><a href={callHref}><span className="material-symbols-outlined" aria-hidden="true">call</span>Call now →</a><Link href="/shop"><span className="material-symbols-outlined" aria-hidden="true">menu_book</span>Explore our products →</Link></div>
 </div><HeroVideo/>
 </div></div></section>;}
