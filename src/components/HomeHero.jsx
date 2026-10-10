import Link from 'next/link';
import {HeroVideo} from './HeroVideo';
import {callHref,stores} from '../lib/contact';

export function HomeHero(){return <section id="home-delivery" className="home-hero home-hero-refreshed"><div className="container"><div className="home-hero-main">
 <div className="home-hero-copy"><h1 className="hero-purity-title">We sell purity not packaging</h1><h2 className="hero-vision-title">We want every child to grow up with <em>better food.</em></h2><p>Food made with good ingredients, traditional wisdom and uncompromising care.</p>
 <div className="hero-service-cards"><Link href="/contact#delivery"><span className="material-symbols-outlined" aria-hidden="true">local_shipping</span><div><strong>Free delivery in 24 hours within 5 km</strong><small>Delivery charges apply beyond 5 km.</small></div></Link><Link href="/contact#delivery"><span className="material-symbols-outlined" aria-hidden="true">schedule</span><div><strong>Fresh atta in 2 hours in Central Noida</strong><small>For orders above ₹1,000 including atta.</small></div></Link><Link href="/customize-atta"><span className="material-symbols-outlined" aria-hidden="true">grain</span><div><strong>Customize your atta</strong><small>Choose from 20+ atta options.<span className="hero-atta-examples">(Khapli, Jowar, Ragi… and others)</span></small></div></Link><a href={stores[0].map} target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined" aria-hidden="true">storefront</span><div><strong>Visit our store</strong><small>Sector 122, Noida · Witness live processing.</small></div></a></div>
 <div className="hero-contact-bar"><a href={callHref}><span className="material-symbols-outlined" aria-hidden="true">call</span>Call now →</a><Link href="/shop"><span className="material-symbols-outlined" aria-hidden="true">menu_book</span>Explore our products →</Link></div>
 </div><HeroVideo/>
 </div></div></section>;}
