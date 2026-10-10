import {business,callHref,whatsappHref,stores,delivery} from '../../lib/contact';
import {StoreLocations} from '../../components/StoreLocations';
export const metadata={title:'Our Stores & Delivery | Jain Desi & Pure',description:'Find our three Noida stores. Fresh atta in 2 hours in Central Noida. For orders above ₹1,000 including atta.'};
export default function ContactPage(){return <div className="contact-page">
 <section className="page-intro contact-intro"><div className="container"><span className="eyebrow">We’re here to help</span><h1>For the Health of Those You Love.</h1><p>Have a question about our products, need help with an order, or want to learn more about our process? We’re here to help you make better food choices for your family.</p><div className="hero-actions"><a className="btn btn-primary" href={whatsappHref()} target="_blank" rel="noopener noreferrer">Chat on WhatsApp ↗</a><a className="btn btn-quiet" href={callHref}>Call {business.displayPhone}</a></div></div></section>
 <section id="delivery" className="section contact-delivery"><div className="container"><span className="eyebrow">At your doorstep</span><h2>Home Delivery</h2>
  <div className="contact-delivery-boxes">
   <article><span className="material-symbols-outlined" aria-hidden="true">local_shipping</span><p><strong>{delivery.free}</strong> {delivery.beyond}</p></article>
   <article><span className="material-symbols-outlined" aria-hidden="true">schedule</span><p><strong>{delivery.headline}</strong> {delivery.eligibility}</p></article>
  </div>
  <div className="contact-process-invitation"><span className="material-symbols-outlined" aria-hidden="true">storefront</span><div><h3>See How We Bring Purity to Your Kitchen</h3><p>Visit our Sector 122, Noida store to witness our live processing and discover how traditional wisdom and careful processing shape the food you bring home.</p><a className="text-link" href={stores[0].map} target="_blank" rel="noopener noreferrer">Get Directions →</a></div></div>
  <div className="contact-delivery-actions"><a className="btn btn-primary" href={callHref}>Call {business.displayPhone}</a><a className="btn contact-whatsapp" href={whatsappHref()} target="_blank" rel="noopener noreferrer">WhatsApp us ↗</a></div>
 </div></section><StoreLocations/>
 </div>;}
