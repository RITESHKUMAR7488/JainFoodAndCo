import test from 'node:test';
import assert from 'node:assert/strict';
import {products,categories,priceText} from '../src/data/products.js';
import {business,callHref,whatsappHref,customAttaHref,stores,delivery,partnershipCallHref,unassignedStoreMap} from '../src/lib/contact.js';
import {collections,belongsToCollection} from '../src/lib/collections.js';
const product=id=>products.find(p=>p.id===id);
const price=(id,label)=>product(id).sizes.find(s=>s.label===label).price;
test('catalog has unique products, valid categories and product-specific images',()=>{
 assert.equal(new Set(products.map(p=>p.id)).size,products.length);
 const images=[];
 for(const p of products){assert.ok(categories.some(c=>c.id===p.category));assert.equal(new Set(p.sizes.map(s=>s.label)).size,p.sizes.length);for(const s of p.sizes){assert.ok(s.price===null||s.price>0);images.push(s.image);}}
 assert.ok(images.every(image=>typeof image==='string'&&image.startsWith('/images/unbranded/')));
 assert.equal(new Set(products.map(p=>p.image)).size,products.length);
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
 for(const p of products)assert.equal(p.isOriginal,['attas','spices','oils','ghee'].includes(p.category));
});
test('WhatsApp link is encoded, includes selected product, size and quantity, and never creates an order',()=>{
 const p=product('black-mustard-oil'),size=p.sizes.find(s=>s.label==='2 L');
 const url=new URL(whatsappHref(p,size,3));
 assert.equal(url.hostname,'wa.me');assert.equal(url.pathname,'/'+business.phone);
 const text=url.searchParams.get('text');
 assert.match(text,/Black Mustard Oil/);assert.match(text,/Pack: 2 L/);assert.match(text,/Quantity: 3/);assert.match(text,/₹480/);
 assert.equal(callHref,'tel:+917838700651');
 const pending=new URL(whatsappHref(product('murmura'),product('murmura').sizes[0])).searchParams.get('text');
 assert.match(pending,/Please advise available sizes/);assert.match(pending,/Please confirm the price/);assert.doesNotMatch(pending,/null|undefined/);
});
test('combined collections include every product once and preserve the ghee-only route',()=>{
 assert.deepEqual(collections.slice(0,3).map(c=>c.id),['oils','attas','spices']);
 for(const p of products)assert.equal(collections.filter(c=>belongsToCollection(p,c.id)).length,1);
 assert.ok(belongsToCollection(product('bilona-cow-ghee'),'oils'));
 assert.ok(belongsToCollection(product('buffalo-ghee'),'originals'));
 assert.ok(belongsToCollection(product('bilona-cow-ghee'),'ghee'));
 assert.ok(!belongsToCollection(product('black-mustard-oil'),'ghee'));
});
test('store and enquiry destinations use approved contacts without assigning an unmatched map',()=>{
 assert.equal(stores.length,3);
 assert.deepEqual(stores.map(s=>s.id),['main','sector-116','noida-extension']);
 assert.match(stores[1].address,/H-09, Sector 116/);
 assert.equal(stores[0].primary,true);
 assert.match(stores[0].address,/Sector 122/);
 assert.equal(stores[0].phone,'919667795721');
 assert.equal(stores[1].phone,'919953887666');
 assert.equal(stores[2].phone,'919217950700');
 assert.match(stores[2].address,/Iteda/);
 assert.equal(stores[0].hours,'Daily: 10 AM–8 PM');
 assert.equal(stores[2].hours,'Daily: 10 AM–8 PM');
 assert.match(stores[0].map,/google.com\/maps\/search/);
 assert.ok(stores.every(s=>s.map!==unassignedStoreMap));
 assert.equal(partnershipCallHref,'tel:+918796300867');
 const custom=new URL(customAttaHref);
 assert.equal(custom.pathname,'/917838700651');
 assert.match(custom.searchParams.get('text'),/personalized atta blend/);
 assert.match(delivery.eligibility,/₹1,000 or more, including atta/);
 assert.match(delivery.beyond,/delivery charges apply/);
});
