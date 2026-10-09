export const delivery = {
 headline: 'Fresh atta in two hours',
 eligibility: 'Central Noida · Orders of ₹1,000 or more, including atta',
 free: 'Free home delivery within 5 km of our main store',
 beyond: 'Beyond 5 km, delivery charges apply. Our team confirms the charge.',
 minimum: 'Minimum order value: ₹1,000, including atta',
 visit: 'Come and see live processing at Sector 122, Noida',
};
const mapSearch = address => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
export const stores = [
 {id:'main',name:'Where we began',area:'Sector 122, Noida',address:'Plot No. 118, Opposite Fusion Homes, Sector 122, Noida',hours:null,map:'https://share.google/XnkwbK8IliJt149nU',primary:true},
 {id:'sector-122',name:'Sector 122 outlet',address:'10, Ground Floor, PK-A, near Baraamda Restaurant, Sector 122, Noida, Uttar Pradesh 201316',hours:'Daily: 10 AM–9:30 PM'},
 {id:'sector-141',name:'Sector 141 outlet',address:'Sector 141, Noida, Uttar Pradesh',hours:'Daily: 10 AM–9:30 PM',map:'https://share.google/VQml9wvo1RRT23zSp'},
 {id:'sector-119',name:'Sector 119 outlet',address:'Shop No. 004, Eldeco Utopia, Eldeco Edge Market, Sector 119, Noida, Uttar Pradesh 201306',hours:'Closes at 9:30 PM. Please enquire for opening hours.'},
].map(store=>({...store,map:store.map||mapSearch(store.address)}));
export const unassignedStoreMap = 'https://share.google/tajbDpiXUHWAany9n';
export const business = {phone:'919217950700',displayPhone:'+91 92179 50700',address:stores[0].address,hours:'Please enquire for opening hours',delivery:`Free delivery within 5 km · Fresh atta delivered in 2 hours in Central Noida · ${delivery.minimum}`};
export const partnership = {phone:'918796300867',displayPhone:'+91 87963 00867',investment:'₹30 lakh',locations:['Noida Expressway · Sectors 128 & 168','Noida · Sectors 104 & 18','Indirapuram','Greater Noida','Gurgaon','Dwarka Expressway','Dwarka','Faridabad','Bengaluru','Pune','Hyderabad']};
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
