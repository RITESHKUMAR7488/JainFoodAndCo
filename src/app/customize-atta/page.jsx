import Link from 'next/link';
import {CustomAtta} from '../../components/CustomAtta';

export const metadata={title:'Customize Your Atta | Jain Desi & Pure',description:'Choose grains and quantities in grams, review your personalized atta blend and enquire with Jain Desi & Pure on WhatsApp.'};

export default function CustomizeAttaPage(){
 return <main className="section custom-atta-page"><div className="container">
  <Link className="back-link" href="/shop/attas">← Atta &amp; Flours</Link>
  <h1>Customize your atta.</h1>
  <CustomAtta/>
 </div></main>;
}
