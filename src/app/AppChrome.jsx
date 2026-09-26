'use client';
import { useRouter } from 'next/navigation';
import { Providers } from './providers';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CartDrawer } from '../components/CartDrawer';
import { SearchModal } from '../components/SearchModal';
import { CheckoutModal } from '../components/CheckoutModal';
import { Toast } from '../components/Toast';
import { routeFor } from '../lib/routes';

export function AppChrome({ children }) {
  const router = useRouter();
  const navigate = (view, category) => router.push(routeFor(view, category));
  return <Providers>
    <div className="app-shell">
      <Header />
      <main>{children}</main>
      <Footer onNavigate={navigate} />
      <CartDrawer onNavigate={navigate} />
      <SearchModal onSelectProduct={(id) => router.push(`/product/${id}`)} />
      <CheckoutModal onComplete={() => router.push('/')} />
      <Toast />
    </div>
  </Providers>;
}
