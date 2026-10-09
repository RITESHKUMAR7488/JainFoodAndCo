import test from 'node:test';
import assert from 'node:assert/strict';
import {attaGrains,prepareAttaBlend} from '../src/lib/customAtta.js';
test('custom atta enquiry preserves every selected grain and gram quantity',()=>{
 const result=prepareAttaBlend({'khapli-wheat-atta':'750','ragi-atta':'250'});
 assert.equal(result.total,1000);assert.equal(result.grains.length,2);
 assert.ok(result.href.startsWith('https://wa.me/917838700651?text='));
 const message=new URL(result.href).searchParams.get('text');
 assert.match(message,/Khapli Wheat: 750 g/);assert.match(message,/Ragi: 250 g/);assert.match(message,/Total: 1000 g/);
 assert.match(message,/confirm blend availability/);
});
test('empty, invalid and unknown-only blends cannot produce an enquiry',()=>{
 for(const value of [{},{unknown:500},{'ragi-atta':''},{'ragi-atta':0},{'ragi-atta':-1},{'ragi-atta':1.5},{'ragi-atta':Infinity}])assert.equal(prepareAttaBlend(value),null);
 assert.ok(attaGrains.every(g=>!g.id.includes('multigrain')));
});
