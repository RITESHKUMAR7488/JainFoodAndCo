import test from 'node:test';
import assert from 'node:assert/strict';
import {searchProducts} from '../src/lib/productSearch.js';
test('search ranks named products ahead of matches in the combined collection',()=>{
 const matches=searchProducts(' GHEE ');
 assert.equal(matches[0].category,'ghee');
 assert.equal(matches[1].category,'ghee');
 assert.ok(matches.some(p=>p.category==='oils'));
 assert.ok(searchProducts('').length>=100);
 assert.equal(searchProducts('no-such-product-xyz').length,0);
});
