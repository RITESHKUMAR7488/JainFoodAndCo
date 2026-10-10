import Link from 'next/link';
import {ProductRow} from '../components/ProductRow';
import {StoreLocations} from '../components/StoreLocations';
import {HomeHero} from '../components/HomeHero';
import {HomeProcess,HomeMission,HomeWomen} from '../components/HomeStory';
import {products} from '../data/products';
import {collections} from '../lib/collections';
import {partnership,partnershipCallHref} from '../lib/contact';

const featured=['mp-sharbati-atta','khapli-wheat-atta','lakdi-ghani-mustard-oil','bilona-cow-ghee','unpolished-whole-cumin','honey','salem-turmeric-powder','black-pepper-whole'];
const categoryPhotos={oils:'/images/collections/oil-ghee.webp',attas:'/images/unbranded/khapli-wheat-atta.png',spices:'/images/spices-bowls.jpg',pulses:'/images/collections/pulses.webp',seeds:'/images/collections/seeds.webp',sweeteners:'/images/collections/sweeteners.webp',grains:'/images/collections/more.webp'};
const homeCategories=[...collections,{id:'ghee',name:'Desi Ghee',href:'/shop/oils'}];

export function HomePage(){return <div className="home-marketing">
 <HomeHero/>
 <section className="home-collections home-section"><div className="container"><div className="home-section-heading"><div><span className="eyebrow">Made for your everyday kitchen</span><h2>Good food starts here.</h2></div><Link className="text-link" href="/shop">Explore our products →</Link></div><nav className="home-category-cards" aria-label="Shop by collection">{homeCategories.map(c=><Link href={c.href||`/shop/${c.id}`} key={c.id}><img src={categoryPhotos[c.id]||'/images/unbranded/bilona-cow-ghee.png'} alt={c.name} width="400" height="240" loading="lazy"/><span>{c.name}<span aria-hidden="true"> →</span></span></Link>)}</nav></div></section>
 <HomeMission/>
 <section className="home-featured home-section"><div className="container"><span className="eyebrow">A few to start with</span><ProductRow collection={{id:'featured',name:'Our Products',href:'/shop',description:'Choose your pack. See the price. Enquire directly.'}} products={featured.map(id=>products.find(p=>p.id===id))}/></div></section>
 <HomeWomen/>
 <section className="home-partnership home-section"><div className="container home-partnership-grid"><div><span className="eyebrow">Take our mission forward</span><h2>Better food.<br/><em>Across India.</em></h2><p>We want Jain Desi &amp; Pure products to be accessible across India. We welcome aspiring entrepreneurs to partner with us and be part of this journey.</p><div className="home-hero-actions"><Link className="btn btn-primary" href="/partnership">Explore partnership →</Link><a className="text-link" href={partnershipCallHref}>Discuss the opportunity ↗</a></div></div><dl className="home-partnership-facts"><div><dt>Minimum investment</dt><dd>{partnership.investment}</dd></div><div><dt>Support from Jain Desi</dt><dd>Procurement &amp; processing setup</dd></div><div><dt>Opportunity potential</dt><dd>No ROI capping</dd><p>Earnings depend on business performance.</p></div></dl></div></section>
 <HomeProcess/>
 <StoreLocations/>
 <section className="home-conversation home-brand-promise"><div className="container"><div><span className="eyebrow">Jain Desi &amp; Pure</span><h2>For healthier families. For generations to come.</h2><p>Better food begins with better choices. Discover our range of everyday essentials and make health a part of what you bring home.</p><div className="home-promise-actions"><Link className="btn btn-light" href="/shop">Explore Our Products →</Link><Link className="btn home-promise-contact" href="/contact">Contact Us</Link></div></div></div></section>
 </div>;}
