export const business = {
 phone:'919667795721',displayPhone:'+91 96677 95721',
 address:'PK-A/10, Sector 122, Parthala Sabzi Mandi Road, Noida',
 hours:'10 AM–8 PM',delivery:'Home delivery within 24 hours in Delhi NCR',
};
export const callHref = `tel:+${business.phone}`;
export function whatsappHref(product,size,quantity=1) {
 const message=product
  ? `Hello Jain Desi & Pure, I would like to enquire about ${product.name}. Pack: ${size?.confirmedSize?size.label:'Please advise available sizes'}. Quantity: ${quantity}. ${typeof size?.price==='number'?`Listed price: ₹${size.price} per pack.`:'Please confirm the price.'} Please confirm availability and delivery to my area.`
  : 'Hello Jain Desi & Pure, I would like to enquire about your products and home delivery in Delhi NCR.';
 return `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;
}
