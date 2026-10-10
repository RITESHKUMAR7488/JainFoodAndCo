export const delivery = {
 headline: 'Fresh atta in two hours',
 eligibility: 'Central Noida · Orders of ₹1,000 or more, including atta',
 free: 'Free home delivery within 5 km of our main store',
 beyond: 'Beyond 5 km, delivery charges apply. Our team confirms the charge.',
 minimum: 'Minimum order value: ₹1,000, including atta',
 visit: 'Come and see live processing at Sector 122, Noida',
};
const orderContact = {phone:'919667795721',displayPhone:'+91 96677 95721'};
const mapSearch = address => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
export const stores = [
 {id:'main',name:'Sector 122 outlet',area:'Sector 122, Noida',address:'10, Ground Floor, PK-A, near Baraamda Restaurant, Sector 122, Noida, UP 201316',phone:'919667795721',displayPhone:'+91 96677 95721',hours:'Daily: 10 AM–8 PM',primary:true},
 {id:'sector-116',name:'Sector 116 outlet',address:'H-09, Sector 116, Noida',hours:null},
 {id:'noida-extension',name:'Noida Extension outlet',address:'Plot No. 118, Iteda, near Bachpan Play School, opposite Fusion Homes and Centurian Park, Noida Extension',hours:'Daily: 10 AM–8 PM'},
].map(store=>({...store,...orderContact,map:store.map||mapSearch(store.address)}));
export const unassignedStoreMap = 'https://share.google/tajbDpiXUHWAany9n';
export const business = {...orderContact,address:stores[0].address,hours:stores[0].hours,delivery:`Free delivery within 5 km; charges apply beyond 5 km · Get our products in 2 hours in Central Noida · ${delivery.minimum}`};
export const partnership = {phone:'918796300867',displayPhone:'+91 87963 00867',investment:'₹30 lakh',locations:['Noida Expressway · Sectors 128 & 168','Noida · Sectors 104 & 18','Indirapuram','Greater Noida','Gurgaon','Dwarka Expressway','Dwarka','Faridabad','Bengaluru','Pune','Hyderabad']};
export const sachinPartnership = {phone:'917838700651',displayPhone:'+91 78387 00651'};
export const callHref = `tel:+${business.phone}`;
export const partnershipCallHref = `tel:+${partnership.phone}`;
export function enquiryHref(message) {return `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;}
export const customAttaHref = enquiryHref('Hello Jain Desi & Pure, I would like to discuss a personalized atta blend. Please advise the available grains, proportions, pack sizes, pricing and preparation time.');
export function whatsappHref(product,size,quantity=1) {
 const message=product
  ? `Hello Jain Desi & Pure, I would like to enquire about ${product.name}. Pack: ${size?.confirmedSize?size.label:'Please advise available sizes'}. Quantity: ${quantity}. ${typeof size?.price==='number'?`Listed price: ₹${size.price} per pack.`:'Please confirm the price.'} Please confirm availability and delivery to my area.`
  : 'Hello Jain Desi & Pure, I would like to enquire about your products and home delivery. Please confirm availability and delivery to my address.';
 return enquiryHref(message);
}
