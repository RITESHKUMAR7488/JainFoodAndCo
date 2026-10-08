'use client';
import {useEffect,useState} from 'react';
import {delivery} from '../lib/contact';
const slides=[
 {src:'/images/delivery-hero.png',alt:'An illustrative fresh-grocery delivery at a Noida home',caption:'Fresh food, closer to home',label:'Fresh atta delivered in 2 hours',detail:delivery.eligibility,icon:'local_shipping',duration:5000},
 {src:'/images/chakki-banner.jpg',alt:'Traditional stone milling and fresh flour',caption:'See the milling process',label:'Freshly milled atta',detail:'Traditional stone milling',icon:'grain',duration:2000},
 {src:'/images/process-ghani.jpg',alt:'Traditional wooden oil press',caption:'The care behind your pantry',label:'Traditional cold-pressed oils',detail:'See the care behind every batch',icon:'water_drop',duration:2000}
];
export function HeroSlides(){
 const [index,setIndex]=useState(0);
 useEffect(()=>{const timer=window.setTimeout(()=>setIndex(current=>(current+1)%slides.length),slides[index].duration);return()=>window.clearTimeout(timer);},[index]);
 const slide=slides[index];
 return <section className="hero-slides" aria-label="Delivery and processing slideshow" aria-roledescription="carousel"><div className="hero-slide-image"><img src={slide.src} alt={slide.alt} fetchPriority={index===0?'high':'auto'}/><div className="delivery-image-label"><span className="material-symbols-outlined" aria-hidden="true">{slide.icon}</span><div><strong>{slide.label}</strong><small>{slide.detail}</small></div></div></div><div className="slide-caption"><span>{slide.caption}</span><div className="slide-controls" role="group" aria-label="Hero images">{slides.map((s,i)=><button key={s.src} type="button" aria-label={`Show image ${i+1}: ${s.caption}`} aria-pressed={index===i} onClick={()=>setIndex(i)}>{String(i+1).padStart(2,'0')}</button>)}</div></div></section>;
}
