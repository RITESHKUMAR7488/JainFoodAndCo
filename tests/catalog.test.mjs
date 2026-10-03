import test from 'node:test';
import assert from 'node:assert/strict';
import {products,categories,priceText} from '../src/data/products.js';
import {business,callHref,whatsappHref} from '../src/lib/contact.js';
const product=id=>products.find(p=>p.id===id);
const price=(id,label)=>product(id).sizes.find(s=>s.label===label).price;
test('catalog has unique products, valid categories and separate pack images',()=>{
 assert.equal(new Set(products.map(p=>p.id)).size,products.length);
 const images=[];
 for(const p of products){assert.ok(categories.some(c=>c.id===p.category));assert.equal(new Set(p.sizes.map(s=>s.label)).size,p.sizes.length);for(const s of p.sizes){assert.ok(s.price===null||s.price>0);images.push(s.image);}}
 assert.equal(new Set(images).size,images.length);
 assert.ok(products.length>=100);
});
test('client corrections override sample prices and exclude winter atta',()=>{
 assert.equal(price('mp-sharbati-atta','5 kg'),290);
 assert.equal(price('black-mustard-oil','2 L'),480);
 assert.equal(price('hing','45 g'),190);
 assert.equal(price('tilkora','200 g'),85);
 assert.equal(price('daliya','500 g'),45);
 assert.equal(price('bilona-cow-ghee','1 L'),910);
 assert.equal(price('buffalo-ghee','1 L'),810);
 assert.equal(price('kangni-atta','1 kg'),210);
 assert.equal(price('kodra-atta','1 kg'),200);
 assert.equal(price('quinoa-atta','1 kg'),260);
 assert.ok(!products.some(p=>/winter/i.test(p.name)));
});
test('pending values remain pending and Originals only contain confirmed families',()=>{
 assert.equal(price('kabuli-chana','500 g'),null);
 assert.equal(product('murmura').sizes[0].confirmedSize,false);
 assert.equal(priceText(null),'Contact for price');
 for(const p of products)assert.equal(p.isOriginal,['attas','spices','oils'].includes(p.category));
});
test('WhatsApp link is encoded, includes selected product, size and quantity, and never creates an order',()=>{
 const p=product('black-mustard-oil'),size=p.sizes.find(s=>s.label==='2 L');
 const url=new URL(whatsappHref(p,size,3));
 assert.equal(url.hostname,'wa.me');assert.equal(url.pathname,'/'+business.phone);
 const text=url.searchParams.get('text');
 assert.match(text,/Black Mustard Oil/);assert.match(text,/Pack: 2 L/);assert.match(text,/Quantity: 3/);assert.match(text,/₹480/);
 assert.equal(callHref,'tel:+919667795721');
 const pending=new URL(whatsappHref(product('murmura'),product('murmura').sizes[0])).searchParams.get('text');
 assert.match(pending,/Please advise available sizes/);assert.match(pending,/Please confirm the price/);assert.doesNotMatch(pending,/null|undefined/);
});
