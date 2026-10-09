import {ProductImage} from './ProductImage';
import Link from 'next/link';

export function CollectionVideoBanner({categoryId}){
 const photos=categoryId==='attas'
  ?[['/images/unbranded/khapli-wheat-atta.png','Wheat grains and flour'],['/images/unbranded/summer-multigrain-atta.png','Multigrain flour and its ingredients']]
  :[['/images/collections/oil-ghee.webp','Cold-pressed oils, seeds and ghee'],['/images/spices-bowls.jpg','Whole and powdered spices']];
 return <div className="collection-media-wrap"><div className="collection-media-collage">
  <div className="collection-video"><video autoPlay muted loop playsInline preload="auto" poster="/images/jain-desi-collections-poster.jpg" aria-label="Jain Desi & Pure grain processing"><source src="/videos/jain-desi-collections.mp4" type="video/mp4"/>Your browser does not support video playback.</video></div>
  <div className="collection-supporting-photos">{photos.map(([src,alt])=><ProductImage key={src} src={src} alt={alt} sizes="(max-width: 820px) 40vw, 20vw"/>)}</div>
 </div><Link href="/customize-atta" className="collection-customize-pill"><span className="material-symbols-outlined" aria-hidden="true">grain</span>Customize your atta<span aria-hidden="true">↗</span></Link></div>;
}
