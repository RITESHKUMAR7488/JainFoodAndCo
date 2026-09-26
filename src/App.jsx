import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { CheckoutModal } from './components/CheckoutModal';
import { Toast } from './components/Toast';

import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { OurProcessPage } from './pages/OurProcessPage';
import { FarmerStoriesPage } from './pages/FarmerStoriesPage';
import { CertificationsPage } from './pages/CertificationsPage';

export function AppContent() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('attas');
  const [selectedProductId, setSelectedProductId] = useState('khapli-wheat-atta');

  // Handle URL hash changes for deep linking
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (!hash) {
        setCurrentView('home');
        return;
      }
      if (hash.startsWith('category/')) {
        const cat = hash.split('/')[1];
        setSelectedCategory(cat);
        setCurrentView('category');
      } else if (hash.startsWith('product/')) {
        const pid = hash.split('/')[1];
        setSelectedProductId(pid);
        setCurrentView('product');
      } else if (hash === 'process' || hash === 'farmers' || hash === 'certifications') {
        setCurrentView(hash);
      } else {
        setCurrentView('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (view, category = null) => {
    setCurrentView(view);
    if (category) {
      setSelectedCategory(category);
      window.location.hash = `/category/${category}`;
    } else if (view === 'home') {
      window.location.hash = '';
    } else {
      window.location.hash = `/${view}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (productId) => {
    setSelectedProductId(productId);
    setCurrentView('product');
    window.location.hash = `/product/${productId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header
        currentView={currentView}
        setCurrentView={setCurrentView}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <main style={{ flexGrow: 1 }}>
        {currentView === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentView === 'category' && (
          <CategoryPage
            categoryId={selectedCategory}
            onSelectProduct={handleSelectProduct}
            onNavigate={navigateTo}
          />
        )}

        {currentView === 'product' && (
          <ProductDetailPage
            productId={selectedProductId}
            onNavigate={navigateTo}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentView === 'process' && (
          <OurProcessPage onNavigate={navigateTo} />
        )}

        {currentView === 'farmers' && (
          <FarmerStoriesPage onNavigate={navigateTo} />
        )}

        {currentView === 'certifications' && (
          <CertificationsPage onNavigate={navigateTo} />
        )}
      </main>

      <Footer onNavigate={navigateTo} />

      {/* Global Interactive Overlays */}
      <CartDrawer onNavigate={navigateTo} />
      <SearchModal onSelectProduct={handleSelectProduct} />
      <CheckoutModal onComplete={() => navigateTo('home')} />
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
