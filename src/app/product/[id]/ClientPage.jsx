'use client';
import { useRouter } from 'next/navigation';
import { ProductDetailPage } from '../../../views/ProductDetailPage';
import { routeFor } from '../../../lib/routes';
export function ProductClient({ id }) {
 const router=useRouter();
 return <ProductDetailPage productId={id} onNavigate={(v,c)=>router.push(routeFor(v,c))} onSelectProduct={(pid)=>router.push(`/product/${pid}`)}/>;
}
