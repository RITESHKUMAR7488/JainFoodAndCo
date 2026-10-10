import Link from 'next/link';
import {partnership,sachinPartnership,partnershipCallHref} from '../../lib/contact';
export const metadata={title:'Partner with Jain Desi & Pure',description:'A business opportunity for entrepreneurs. Minimum investment ₹30 lakh, with procurement and processing setup facilitated by Jain Desi.'};
function PartnershipContacts({light=false}){
 return <div className={`partnership-contact-options ${light?'on-dark':''}`}>
  <a className="partnership-phone" href={partnershipCallHref}><span className="material-symbols-outlined" aria-hidden="true">call</span><span><small>Sonam Sabikhi · Partnership</small><strong>{partnership.displayPhone}</strong></span></a>
  <a className="partnership-phone" href={`tel:+${sachinPartnership.phone}`}><span className="material-symbols-outlined" aria-hidden="true">call</span><span><small>Sachin Jain · Partnership</small><strong>{sachinPartnership.displayPhone}</strong></span></a>
 </div>;
}
export default function PartnershipPage(){return <>
 <section className="partnership-intro"><div className="container partnership-intro-grid">
  <div className="partnership-vision"><div className="partnership-vision-copy"><span className="eyebrow">Grow with Jain Desi &amp; Pure</span><h1><span>Turn Your Entrepreneurial</span><span>Ambition into Opportunity</span></h1><p>Our vision is to make Jain Desi &amp; Pure products accessible to families across India, bringing pure, wholesome everyday food to more homes.</p><p>We invite aspiring entrepreneurs to partner with Jain Desi &amp; Pure and be part of our growth journey. Build a purpose-driven business with our procurement and processing support, helping more Indian families access chemical-free food.</p><PartnershipContacts/><div className="hero-actions"><a className="btn btn-primary" href={partnershipCallHref}>Explore partnership →</a><Link className="btn partnership-vision-link" href="/#mission">Read our mission →</Link></div><p className="partnership-family-line">For healthier families. For generations to come.</p></div></div>
  <div className="partnership-facts partnership-key-elements" aria-label="Partnership key elements">
   <article><span className="partnership-fact-icon material-symbols-outlined" aria-hidden="true">payments</span><div><span className="eyebrow">Investment size</span><h2>{partnership.investment}</h2><p>Minimum investment for the business opportunity.</p></div></article>
   <article><span className="partnership-fact-icon material-symbols-outlined" aria-hidden="true">settings</span><div><span className="eyebrow">Support</span><h2>From procurement to processing.</h2><p>Full procurement and processing setup facilitated by Jain Desi.</p></div></article>
   <article><span className="partnership-fact-icon material-symbols-outlined" aria-hidden="true">trending_up</span><div><span className="eyebrow">Uncapped ROI</span><h2>Unlimited upside potential.</h2><p>No ROI capping. Explore the opportunity and its business model with our team; earnings depend on business performance.</p></div></article>
  </div>
 </div><div className="partnership-shared"><span className="material-symbols-outlined" aria-hidden="true">eco</span><p>A shared opportunity to bring better food to more Indian families.</p></div></section>
 <section className="section soft"><div className="container"><span className="eyebrow">Where we want to grow</span><h2>Areas of expansion interest</h2><p className="section-description">These are areas we are interested in exploring. Discuss location availability and suitability with our team.</p><ul className="expansion-list">{partnership.locations.map(l=><li key={l}>{l}</li>)}</ul></div></section>
 <section className="closing-panel partnership-closing"><div className="container"><span className="eyebrow">Start a conversation</span><h2>Bring our mission to your community.</h2><p>Discuss the opportunity and setup with our partnership team.</p><PartnershipContacts light/><div className="partnership-actions"><a className="btn btn-light" href={partnershipCallHref}>Discuss partnership →</a><Link className="btn partnership-mission" href="/#mission">Read our mission →</Link></div></div></section>
 </>;}
