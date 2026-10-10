'use client';
import {useRef} from 'react';
import Link from 'next/link';

export function PartnershipBubble(){
 const popupRef=useRef(null);
 return <>
  <button className="partnership-bubble" type="button" popoverTarget="partnership-opportunity" aria-label="Explore partnership opportunity"><span className="material-symbols-outlined" aria-hidden="true">forum</span></button>
  <aside ref={popupRef} id="partnership-opportunity" className="partnership-opportunity" popover="auto" aria-labelledby="partnership-opportunity-title">
   <button className="partnership-popup-close" type="button" popoverTarget="partnership-opportunity" popoverTargetAction="hide" aria-label="Close partnership opportunity"><span className="material-symbols-outlined" aria-hidden="true">close</span></button>
   <span className="eyebrow">Grow with Jain Desi &amp; Pure</span>
   <h2 id="partnership-opportunity-title">A partnership opportunity.</h2>
   <p>Build a purpose-driven business bringing pure, wholesome food to more Indian families, with our procurement and processing support.</p>
   <Link className="partnership-popup-link" href="/partnership" onClick={()=>popupRef.current?.hidePopover()}>More details <span aria-hidden="true">→</span></Link>
  </aside>
 </>;
}
