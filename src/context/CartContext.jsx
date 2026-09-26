import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('jain_cart_items');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('jain_cart_items', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((current) => (current === message ? null : current));
    }, 3200);
  };

  const addItem = (product, sizeObj, quantity = 1) => {
    const selectedSize = sizeObj || product.sizes?.[0] || { label: 'Standard', price: product.price };
    const price = selectedSize.price || product.price;
    const packLabel = selectedSize.label;
    const itemKey = `${product.id}-${packLabel}`;

    setCartItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.key === itemKey);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity
        };
        return next;
      }
      return [
        ...prev,
        {
          key: itemKey,
          id: product.id,
          name: product.name,
          packSize: packLabel,
          price: price,
          image: product.image,
          category: product.category,
          quantity: quantity
        }
      ];
    });

    showToast(`Added ${quantity} × ${product.name} (${packLabel}) to cart`);
    setIsCartOpen(true);
  };

  const removeItem = (itemKey) => {
    setCartItems((prev) => prev.filter((item) => item.key !== itemKey));
  };

  const updateQuantity = (itemKey, delta) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.key === itemKey) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const clearCart = () => {
    setCartItems([]);
    setCouponCode('');
    setDiscountPercent(0);
  };

  const applyCoupon = (code) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'DESIPURE10' || clean === 'HERITAGE10') {
      setCouponCode(clean);
      setDiscountPercent(10);
      showToast('Promo code applied: 10% discount on order!');
      return { success: true, message: '10% discount applied!' };
    }
    if (clean === 'FIRST15') {
      setCouponCode(clean);
      setDiscountPercent(15);
      showToast('First harvest discount: 15% off applied!');
      return { success: true, message: '15% discount applied!' };
    }
    return { success: false, message: 'Invalid promo code. Try DESIPURE10' };
  };

  const removeCoupon = () => {
    setCouponCode('');
    setDiscountPercent(0);
    showToast('Promo code removed');
  };

  // Calculations
  const totalItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const freeShippingThreshold = 999;
  const isFreeShipping = subtotal >= freeShippingThreshold || subtotal === 0;
  const shippingFee = isFreeShipping ? 0 : 80;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const freeShippingProgress = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const finalTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        isSearchOpen,
        setIsSearchOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        couponCode,
        discountPercent,
        applyCoupon,
        removeCoupon,
        totalItemCount,
        subtotal,
        freeShippingThreshold,
        isFreeShipping,
        shippingFee,
        amountToFreeShipping,
        freeShippingProgress,
        discountAmount,
        finalTotal,
        toastMessage,
        showToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
