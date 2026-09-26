'use client';
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export const CartDrawer = ({ onNavigate }) => {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    removeItem,
    updateQuantity,
    subtotal,
    freeShippingThreshold,
    isFreeShipping,
    amountToFreeShipping,
    freeShippingProgress,
    shippingFee,
    discountAmount,
    discountPercent,
    finalTotal,
    couponCode,
    applyCoupon,
    removeCoupon,
    setIsCheckoutOpen
  } = useCart();

  const [inputCoupon, setInputCoupon] = useState('');
  const [couponError, setCouponError] = useState('');

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!inputCoupon.trim()) return;
    const res = applyCoupon(inputCoupon);
    if (!res.success) {
      setCouponError(res.message);
    } else {
      setCouponError('');
      setInputCoupon('');
    }
  };

  const handleCheckoutClick = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="cart-overlay" onClick={() => setIsCartOpen(false)}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="cart-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span className="material-symbols-outlined" style={{ color: 'var(--color-primary)' }}>
              shopping_bag
            </span>
            <h3 className="font-serif">Your Pure Basket</h3>
            <span
              style={{
                fontSize: '0.8rem',
                backgroundColor: 'var(--color-surface-container)',
                padding: '0.15rem 0.5rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: 600
              }}
            >
              {cartItems.reduce((acc, i) => acc + i.quantity, 0)}
            </span>
          </div>
          <button className="icon-btn" onClick={() => setIsCartOpen(false)} aria-label="Close Cart">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="free-shipping-bar">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 600, color: 'var(--color-primary)' }}>
              {isFreeShipping
                ? '🎉 Congratulations! You unlocked FREE Delivery'
                : `Add ₹${amountToFreeShipping} more for FREE shipping`}
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-subtle)' }}>
              Threshold: ₹{freeShippingThreshold}
            </span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${freeShippingProgress}%` }}></div>
          </div>
        </div>

        {/* Cart Items List */}
        <div className="cart-items-list">
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <span
                className="material-symbols-outlined"
                style={{ fontSize: '3.5rem', color: 'var(--color-outline-variant)', marginBottom: '1rem' }}
              >
                shopping_basket
              </span>
              <h4 className="font-serif" style={{ marginBottom: '0.5rem' }}>
                Your basket is empty
              </h4>
              <p style={{ fontSize: '0.88rem', marginBottom: '1.5rem' }}>
                Explore authentic stone-ground flours and single-origin pure spices milled fresh.
              </p>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => {
                  setIsCartOpen(false);
                  onNavigate('category', 'attas');
                }}
              >
                Browse Attas &amp; Spices
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.key} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-size">Pack Size: {item.packSize}</div>
                  <div className="cart-item-actions">
                    <div className="qty-control">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.key, -1)}
                        title="Decrease"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.key, 1)}
                        title="Increase"
                      >
                        +
                      </button>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span className="cart-item-price">₹{item.price * item.quantity}</span>
                      <button
                        onClick={() => removeItem(item.key)}
                        style={{ color: 'var(--color-outline)', display: 'flex' }}
                        title="Remove"
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>
                          delete
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout */}
        {cartItems.length > 0 && (
          <div className="cart-footer">
            {/* Promo Code Form */}
            {couponCode ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: 'rgba(34, 103, 56, 0.1)',
                  padding: '0.5rem 0.8rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid rgba(34, 103, 56, 0.3)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--color-success)', fontWeight: 600 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>
                    check_circle
                  </span>
                  <span>{couponCode} ({discountPercent}% OFF)</span>
                </div>
                <button
                  type="button"
                  onClick={removeCoupon}
                  style={{ fontSize: '0.75rem', color: 'var(--color-error)', fontWeight: 600 }}
                >
                  Remove
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplyCoupon} className="coupon-form">
                <input
                  type="text"
                  placeholder="Coupon (try DESIPURE10)"
                  value={inputCoupon}
                  onChange={(e) => {
                    setInputCoupon(e.target.value);
                    setCouponError('');
                  }}
                  className="coupon-input"
                />
                <button type="submit" className="btn btn-outline btn-sm">
                  Apply
                </button>
              </form>
            )}

            {couponError && (
              <div style={{ color: 'var(--color-error)', fontSize: '0.78rem' }}>{couponError}</div>
            )}

            {/* Calculations Breakdown */}
            <div className="cart-summary-row">
              <span>Items Subtotal:</span>
              <span>₹{subtotal}</span>
            </div>

            {discountAmount > 0 && (
              <div className="cart-summary-row" style={{ color: 'var(--color-success)' }}>
                <span>Discount ({discountPercent}%):</span>
                <span>-₹{discountAmount}</span>
              </div>
            )}

            <div className="cart-summary-row">
              <span>Delivery Fee:</span>
              <span>{isFreeShipping ? 'FREE' : `₹${shippingFee}`}</span>
            </div>

            <div className="cart-summary-row total">
              <span>Grand Total:</span>
              <span>₹{finalTotal}</span>
            </div>

            {/* Checkout Action Button */}
            <button
              className="btn btn-secondary btn-lg"
              style={{ width: '100%', marginTop: '0.5rem' }}
              onClick={handleCheckoutClick}
            >
              <span>Proceed to Checkout</span>
              <span className="material-symbols-outlined" style={{ fontSize: '1.15rem' }}>
                arrow_forward
              </span>
            </button>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', fontSize: '0.72rem', color: 'var(--color-text-subtle)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '0.9rem' }}>
                lock
              </span>
              <span>Safe &amp; Encrypted Indian Payment Gateway</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
