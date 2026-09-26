'use client';
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export const CheckoutModal = ({ onComplete }) => {
  const { isCheckoutOpen, setIsCheckoutOpen, cartItems, finalTotal, subtotal, discountAmount, shippingFee, clearCart } = useCart();
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: 'Ritesh Jain',
    phone: '+91 98765 43210',
    email: 'ritesh@example.com',
    address: '42, Heritage Enclave, Civil Lines',
    city: 'Jaipur',
    state: 'Rajasthan',
    pincode: '302006',
    paymentMethod: 'upi'
  });

  const [orderNumber, setOrderNumber] = useState('');

  if (!isCheckoutOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const generatedOrder = `JDP-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(generatedOrder);
    setStep(3); // Success step
    clearCart();
  };

  return (
    <div className="modal-overlay" onClick={() => setIsCheckoutOpen(false)}>
      <div
        className="search-modal"
        style={{ maxWidth: '680px', maxHeight: '90vh', overflowY: 'auto' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="search-bar-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span className="material-symbols-outlined" style={{ color: 'var(--color-primary)' }}>
              shopping_bag
            </span>
            <h3 className="font-serif" style={{ fontSize: '1.25rem' }}>
              {step === 3 ? 'Order Confirmed!' : 'Express Checkout'}
            </h3>
          </div>
          <button className="icon-btn" onClick={() => setIsCheckoutOpen(false)}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {step < 3 ? (
          <form onSubmit={step === 1 ? (e) => { e.preventDefault(); setStep(2); } : handlePlaceOrder} style={{ padding: '1.5rem' }}>
            {/* Step 1: Address Details */}
            {step === 1 && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <h4 style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '1.2rem', color: 'var(--color-secondary)' }}>
                      local_shipping
                    </span>
                    Shipping Destination
                  </h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-subtle)' }}>Step 1 of 2</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.3rem' }}>Full Name</label>
                    <input
                      required
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '0.6rem 0.8rem', border: '1px solid var(--color-outline-variant)', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-surface-container-lowest)' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.3rem' }}>Phone Number</label>
                    <input
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '0.6rem 0.8rem', border: '1px solid var(--color-outline-variant)', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-surface-container-lowest)' }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.3rem' }}>Email Address (for order updates)</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '0.6rem 0.8rem', border: '1px solid var(--color-outline-variant)', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-surface-container-lowest)' }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.3rem' }}>Street Address / Landmark</label>
                  <input
                    required
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '0.6rem 0.8rem', border: '1px solid var(--color-outline-variant)', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-surface-container-lowest)' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.3rem' }}>City</label>
                    <input
                      required
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '0.6rem 0.8rem', border: '1px solid var(--color-outline-variant)', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-surface-container-lowest)' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.3rem' }}>State</label>
                    <input
                      required
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '0.6rem 0.8rem', border: '1px solid var(--color-outline-variant)', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-surface-container-lowest)' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.3rem' }}>Pincode</label>
                    <input
                      required
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '0.6rem 0.8rem', border: '1px solid var(--color-outline-variant)', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-surface-container-lowest)' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.8rem' }}>
                  <button type="submit" className="btn btn-primary">
                    <span>Continue to Payment</span>
                    <span className="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>arrow_forward</span>
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Payment & Order Summary */}
            {step === 2 && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <h4 style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '1.2rem', color: 'var(--color-secondary)' }}>
                      payment
                    </span>
                    Payment Method
                  </h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-subtle)' }}>Step 2 of 2</span>
                </div>

                {/* Payment Option Radio Cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '1.5rem' }}>
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: formData.paymentMethod === 'upi' ? '2px solid var(--color-primary)' : '1px solid var(--color-outline-variant)',
                      backgroundColor: formData.paymentMethod === 'upi' ? 'rgba(22, 52, 34, 0.05)' : 'var(--color-surface)',
                      cursor: 'pointer'
                    }}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="upi"
                      checked={formData.paymentMethod === 'upi'}
                      onChange={handleChange}
                    />
                    <div style={{ flexGrow: 1 }}>
                      <div style={{ fontWeight: 600, color: 'var(--color-primary)' }}>UPI Fast Pay (GPay / PhonePe / Paytm / QR)</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--color-text-subtle)' }}>Instant 0% transaction fee via BHIM UPI</div>
                    </div>
                    <span className="material-symbols-outlined" style={{ color: 'var(--color-secondary)' }}>qr_code_scanner</span>
                  </label>

                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: formData.paymentMethod === 'card' ? '2px solid var(--color-primary)' : '1px solid var(--color-outline-variant)',
                      backgroundColor: formData.paymentMethod === 'card' ? 'rgba(22, 52, 34, 0.05)' : 'var(--color-surface)',
                      cursor: 'pointer'
                    }}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleChange}
                    />
                    <div style={{ flexGrow: 1 }}>
                      <div style={{ fontWeight: 600, color: 'var(--color-primary)' }}>Credit / Debit Card</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--color-text-subtle)' }}>Visa, MasterCard, RuPay, Amex</div>
                    </div>
                    <span className="material-symbols-outlined" style={{ color: 'var(--color-primary)' }}>credit_card</span>
                  </label>

                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: formData.paymentMethod === 'cod' ? '2px solid var(--color-primary)' : '1px solid var(--color-outline-variant)',
                      backgroundColor: formData.paymentMethod === 'cod' ? 'rgba(22, 52, 34, 0.05)' : 'var(--color-surface)',
                      cursor: 'pointer'
                    }}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleChange}
                    />
                    <div style={{ flexGrow: 1 }}>
                      <div style={{ fontWeight: 600, color: 'var(--color-primary)' }}>Cash on Delivery (COD)</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--color-text-subtle)' }}>Pay when your harvest package arrives</div>
                    </div>
                    <span className="material-symbols-outlined" style={{ color: 'var(--color-primary)' }}>payments</span>
                  </label>
                </div>

                {/* Brief Order Summary box */}
                <div
                  style={{
                    backgroundColor: 'var(--color-surface-container-low)',
                    padding: '1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-outline-variant)',
                    marginBottom: '1.5rem',
                    fontSize: '0.85rem'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <span>Total Items ({cartItems.length}):</span>
                    <span>₹{subtotal}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', color: 'var(--color-success)' }}>
                      <span>Coupon Savings:</span>
                      <span>-₹{discountAmount}</span>
                    </div>
                  )}
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <span>Shipping:</span>
                    <span>{shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '1.05rem', color: 'var(--color-primary)', borderTop: '1px solid var(--color-outline-variant)', paddingTop: '0.4rem' }}>
                    <span>Total Amount Payable:</span>
                    <span>₹{finalTotal}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <button type="button" className="btn btn-ghost btn-sm" onClick={() => setStep(1)}>
                    &larr; Back to Address
                  </button>
                  <button type="submit" className="btn btn-secondary btn-lg">
                    <span>Confirm &amp; Place Order (₹{finalTotal})</span>
                    <span className="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>check_circle</span>
                  </button>
                </div>
              </div>
            )}
          </form>
        ) : (
          /* Step 3: Order Confirmation Success Screen */
          <div style={{ padding: '2.5rem 1.5rem', textAlign: 'center' }}>
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                backgroundColor: 'rgba(34, 103, 56, 0.15)',
                color: 'var(--color-success)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem'
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '2.5rem' }}>
                verified
              </span>
            </div>

            <h3 className="font-serif" style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
              Dhanyawaad! Your Harvest is Being Prepared
            </h3>
            <p style={{ color: 'var(--color-on-surface-variant)', maxWidth: '440px', margin: '0 auto 1.5rem' }}>
              Your order <strong>#{orderNumber}</strong> has been received with love. Freshly stone-ground and cold-pressed staples will dispatch directly to your doorstep.
            </p>

            <div
              style={{
                backgroundColor: 'var(--color-surface-container)',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                maxWidth: '440px',
                margin: '0 auto 1.5rem',
                textAlign: 'left',
                fontSize: '0.85rem'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--color-text-subtle)' }}>Delivering to:</span>
                <span style={{ fontWeight: 600 }}>{formData.fullName}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--color-text-subtle)' }}>Destination:</span>
                <span style={{ fontWeight: 600 }}>{formData.city}, {formData.pincode}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--color-text-subtle)' }}>Estimated Arrival:</span>
                <span style={{ fontWeight: 600, color: 'var(--color-secondary)' }}>Within 3-4 Business Days</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-text-subtle)' }}>Purity Guarantee:</span>
                <span style={{ fontWeight: 600, color: 'var(--color-primary)' }}>Batch Lab Verified</span>
              </div>
            </div>

            <button
              className="btn btn-primary"
              onClick={() => {
                setIsCheckoutOpen(false);
                setStep(1);
                onComplete();
              }}
            >
              <span>Continue Shopping</span>
              <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>home</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
