'use client';
import {useId,useRef,useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {products} from '../data/products';
import {ProductImage} from './ProductImage';
import {searchProducts} from '../lib/productSearch';
export function HeaderSearch({onSearch}){
 const [query,setQuery]=useState(''),[open,setOpen]=useState(false),[active,setActive]=useState(-1);
 const inputRef=useRef(null),listId=useId(),router=useRouter();
 const matches=searchProducts(query);
 const suggestions=(query.trim()?matches:products.filter(p=>['khapli-wheat-atta','black-mustard-oil','bilona-cow-ghee','jeera'].includes(p.id))).slice(0,6);
 function search(event){event.preventDefault();setOpen(false);if(active>=0&&suggestions[active])router.push(`/product/${suggestions[active].id}`);else onSearch(query);}
 function keys(event){if(event.key==='Escape'){setOpen(false);setActive(-1);}else if(event.key==='ArrowDown'||event.key==='ArrowUp'){event.preventDefault();setOpen(true);setActive(current=>event.key==='ArrowDown'?Math.min(current+1,suggestions.length-1):Math.max(current-1,0));}}
 return <div className="header-search" onBlur={event=>{if(!event.currentTarget.contains(event.relatedTarget)){setOpen(false);setActive(-1);}}}>
  <form role="search" onSubmit={search}><span className="material-symbols-outlined" aria-hidden="true">search</span><input ref={inputRef} type="search" role="combobox" aria-label="Search 100+ products" aria-autocomplete="list" aria-expanded={open} aria-controls={listId} aria-activedescendant={open&&active>=0?`${listId}-${active}`:undefined} placeholder="Search atta, ghee, spices… 100+ items" value={query} onFocus={()=>setOpen(true)} onChange={event=>{setQuery(event.target.value);setOpen(true);setActive(-1);}} onKeyDown={keys}/><button type="submit" aria-label="Show search results"><span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span></button></form>
  {open&&<div className="header-suggestions"><div className="suggestions-heading"><strong>{query.trim()?'Suggested products':'Popular searches'}</strong><span>100+ items to discover</span></div>{!query.trim()&&<div className="search-chips">{['Atta','Ghee','Mustard oil','Spices'].map(term=><button type="button" key={term} onClick={()=>{setQuery(term);setActive(-1);inputRef.current.focus();}}>{term}</button>)}</div>}<div id={listId} role="listbox" aria-label="Suggested products">{suggestions.map((p,index)=><Link role="option" aria-selected={active===index} id={`${listId}-${index}`} key={p.id} href={`/product/${p.id}`} onClick={()=>setOpen(false)}><ProductImage src={p.image} alt="" sizes="48px"/><span><strong>{p.name}</strong><small>{p.categoryName}</small></span><span className="material-symbols-outlined" aria-hidden="true">north_east</span></Link>)}</div>{!suggestions.length&&<p className="search-no-matches" role="status">No matches. Try another product or grain.</p>}<button className="search-all" type="button" onClick={()=>{setOpen(false);onSearch(query);}}>View {query.trim()?`${matches.length} matching products`:'all products'} →</button></div>}
 </div>;
}
