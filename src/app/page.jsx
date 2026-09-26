'use client';
import { useRouter } from 'next/navigation';
import { HomePage } from '../views/HomePage';
import { routeFor } from '../lib/routes';
export default function Home() {
  const router=useRouter();
  return <HomePage onNavigate={(v,c)=>router.push(routeFor(v,c))} onSelectProduct={(id)=>router.push(`/product/${id}`)}/>;
}
