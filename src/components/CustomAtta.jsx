'use client';
import {useEffect,useRef,useState} from 'react';
import {attaGrains,prepareAttaBlend} from '../lib/customAtta';
export function CustomAtta(){
 const [quantities,setQuantities]=useState({}),[blend,setBlend]=useState(null),[error,setError]=useState(''),summaryRef=useRef(null);
 useEffect(()=>{if(blend){summaryRef.current.scrollIntoView({block:'nearest',behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});summaryRef.current.focus({preventScroll:true});}},[blend]);
 function update(id,value){setQuantities(previous=>({...previous,[id]:value}));setBlend(null);setError('');}
 function toggle(id,checked){setQuantities(previous=>{const next={...previous};if(checked)next[id]='';else delete next[id];return next;});setBlend(null);setError('');}
 function done(event){event.preventDefault();const prepared=prepareAttaBlend(quantities);setBlend(prepared);setError(prepared?'':'Select at least one grain and enter a positive whole-number quantity in grams.');}
 return <section id="custom-atta" className="custom-atta"><span className="eyebrow">Your kitchen, your blend</span><h2>Make your own atta.</h2><p>Select your grains and enter the quantity of each in grams. Our team will confirm whether your blend can be prepared, along with its price and preparation time.</p>
 <form onSubmit={done}><fieldset className="blend-options"><legend>Choose grains for your blend</legend>{attaGrains.map(g=><div className="blend-grain" key={g.id}><label className="blend-choice"><input type="checkbox" checked={Object.hasOwn(quantities,g.id)} onChange={e=>toggle(g.id,e.target.checked)}/><span>{g.name}</span></label>{Object.hasOwn(quantities,g.id)&&<label className="blend-quantity">Quantity (g)<input type="number" min="1" step="1" required aria-label={`${g.name} quantity in grams`} value={quantities[g.id]} onChange={e=>update(g.id,e.target.value)}/></label>}</div>)}</fieldset><button className="btn btn-primary" type="submit">Done</button>{error&&<p className="blend-error" role="alert">{error}</p>}</form>
 {blend&&<div ref={summaryRef} tabIndex={-1} className="blend-summary" role="status"><h3>Your atta blend</h3><ul>{blend.grains.map(g=><li key={g.id}>{g.name}: <strong>{g.grams} g</strong></li>)}</ul><p><strong>Total: {blend.total} g</strong></p><a className="btn btn-primary" href={blend.href} target="_blank" rel="noopener noreferrer">Enquire on WhatsApp ↗</a><p className="contact-caption">Review your prepared enquiry in WhatsApp and send it to our team.</p></div>}
 </section>;
}
