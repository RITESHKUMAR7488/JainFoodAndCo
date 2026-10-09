import {ProductImage} from './ProductImage';
import Link from 'next/link';
import {whatsappHref} from '../lib/contact';

export function CollectionVideoBanner({categoryId}){
 const isAtta=categoryId==='attas';
 const photos=isAtta
  ?[['/images/unbranded/khapli-wheat-atta.png','Khapli wheat atta'],['/images/unbranded/jowar-atta.png','Jowar atta'],['/images/unbranded/ragi-atta.png','Ragi atta'],['/images/unbranded/summer-multigrain-atta.png','Multigrain atta']]
  :[['/images/collections/oil-ghee.webp','Cold-pressed oils, seeds and ghee'],['/images/spices-bowls.jpg','Whole and powdered spices']];
 const customizePill=<Link href="/customize-atta" className="collection-customize-pill"><span className="material-symbols-outlined" aria-hidden="true">grain</span>Customize your atta<span aria-hidden="true">↗</span></Link>;
 return <div className="collection-media-wrap"><div className={`collection-media-collage ${isAtta?'atta-media-collage':''}`}>
  <div className="collection-video"><video autoPlay muted loop playsInline preload="auto" poster="/images/jain-desi-collections-poster.jpg" aria-label="Jain Desi & Pure grain processing"><source src="/videos/jain-desi-collections.mp4" type="video/mp4"/>Your browser does not support video playback.</video></div>
  <div className="collection-supporting-column"><div className="collection-supporting-photos">{photos.map(([src,alt],index)=>isAtta&&index===3?<Link key={src} href="/customize-atta" className="collection-customize-photo"><ProductImage src={src} alt={alt} sizes="(max-width: 820px) 22vw, 15vw"/><span>Customize from 15+ atta <span aria-hidden="true">↗</span></span></Link>:<ProductImage key={src} src={src} alt={alt} sizes={isAtta?'(max-width: 820px) 22vw, 15vw':'(max-width: 820px) 40vw, 20vw'}/>)}</div>{isAtta&&customizePill}</div>
 </div>{!isAtta&&<div className="collection-banner-actions">{customizePill}<a className="collection-customize-pill" href={whatsappHref()} target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined" aria-hidden="true">chat</span>Enquire now<span aria-hidden="true">↗</span></a></div>}</div>;
}
