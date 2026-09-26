'use client';
import { useRouter } from 'next/navigation';
import { CategoryPage } from '../../../views/CategoryPage';
import { routeFor } from '../../../lib/routes';
export function CategoryClient({ category }) {
 const router=useRouter();
 return <CategoryPage categoryId={category} onSelectProduct={(id)=>router.push(`/product/${id}`)} onNavigate={(v,c)=>router.push(routeFor(v,c))}/>;
}
