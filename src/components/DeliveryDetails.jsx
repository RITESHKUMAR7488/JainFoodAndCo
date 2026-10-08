import {delivery} from '../lib/contact';
export function DeliveryDetails(){return <div className="delivery-details"><p><strong>{delivery.headline}</strong></p><p>{delivery.eligibility}</p><p>{delivery.free}. {delivery.beyond}</p></div>;}
