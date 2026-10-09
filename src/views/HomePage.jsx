import Link from 'next/link';
import {ProductImage} from '../components/ProductImage';
import {ProductRow} from '../components/ProductRow';
import {StoreLocations} from '../components/StoreLocations';
import {HomeHero} from '../components/HomeHero';
import {HomeProcess,HomeMission,HomeWomen} from '../components/HomeStory';
import {products} from '../data/products';
import {collections} from '../lib/collections';
import {business,callHref,whatsappHref,partnership,partnershipCallHref} from '../lib/contact';

const featured=['mp-sharbati-atta','khapli-wheat-atta','lakdi-ghani-mustard-oil','bilona-cow-ghee','unpolished-whole-cumin','honey','salem-turmeric-powder','black-pepper-whole'];
const spotlights=[{id:'attas',eyebrow:'Freshly milled',title:'The grain. The flour. Your everyday roti.',image:'/images/unbranded/khapli-wheat-atta.png',alt:'Khapli wheat and flour',link:'Explore atta & flours →'},{id:'oils',eyebrow:'Traditionally prepared',title:'Cold-pressed oils & bilona ghee.',image:'/images/unbranded/lakdi-ghani-mustard-oil.png',alt:'Mustard oil and seeds',link:'Explore oil & ghee →'},{id:'spices',eyebrow:'Flavour starts here',title:'Whole spices. Freshly ground flavours.',image:'/images/spices-bowls.jpg',alt:'An assortment of spices',link:'Explore spices & masalas →'}];

export function HomePage(){return <div className="home-marketing">
 <HomeHero/>
 <section className="home-collections home-section"><div className="container"><div className="home-section-heading"><div><span className="eyebrow">Made for your everyday kitchen</span><h2>Good food starts here.</h2></div><Link className="text-link" href="/shop">Browse the full catalog →</Link></div><nav className="home-category-list" aria-label="Shop by collection">{collections.map(c=><Link href={`/shop/${c.id}`} key={c.id}><img src={`/images/menu-cutouts/${c.id}.png`} alt="" width="96" height="90" loading="lazy"/><span>{c.name}<span aria-hidden="true"> ↗</span></span></Link>)}</nav><div className="home-spotlights">{spotlights.map(s=><Link className={`home-spotlight spotlight-${s.id}`} href={`/shop/${s.id}`} key={s.id}><div><span className="eyebrow">{s.eyebrow}</span><h3>{s.title}</h3><span className="text-link">{s.link}</span></div><ProductImage src={s.image} alt={s.alt} sizes="(max-width:820px) 50vw, 20vw"/></Link>)}</div></div></section>
 <HomeProcess/>
 <HomeMission/>
 <section className="home-featured home-section"><div className="container"><span className="eyebrow">A few to start with</span><ProductRow collection={{id:'featured',name:'Our Products',href:'/shop',description:'Choose your pack. See the price. Enquire directly.'}} products={featured.map(id=>products.find(p=>p.id===id))}/></div></section>
 <HomeWomen/>
 <section className="home-partnership home-section"><div className="container home-partnership-grid"><div><span className="eyebrow">Take our mission forward</span><h2>Better food.<br/><em>Across India.</em></h2><p>We want Jain Desi &amp; Pure products to be accessible across India. We welcome aspiring entrepreneurs to partner with us and be part of this journey.</p><div className="home-hero-actions"><Link className="btn btn-primary" href="/partnership">Explore partnership →</Link><a className="text-link" href={partnershipCallHref}>Discuss the opportunity ↗</a></div></div><dl className="home-partnership-facts"><div><dt>Minimum investment</dt><dd>{partnership.investment}</dd></div><div><dt>Support from Jain Desi</dt><dd>Procurement &amp; processing setup</dd></div><div><dt>Opportunity potential</dt><dd>No ROI capping</dd><p>Earnings depend on business performance.</p></div></dl></div></section>
 <StoreLocations/>
 <section className="home-conversation"><div className="container"><div><span className="eyebrow">Your next conversation starts here</span><h2>Good food. Real people.</h2><p>Try our products for a month. Explore what works for your family and speak with our team.</p></div><div><a className="conversation-phone" href={callHref}>{business.displayPhone} ↗</a><a className="btn btn-light" href={whatsappHref()} target="_blank" rel="noopener noreferrer">Chat on WhatsApp ↗</a></div></div></section>
 </div>;}
