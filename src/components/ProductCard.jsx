import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export const ProductCard = ({ product, onSelectProduct }) => {
  const { addItem } = useCart();
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(
    product.sizes?.findIndex((s) => s.popular) !== -1 ? product.sizes.findIndex((s) => s.popular) : 0
  );

  const currentSize = product.sizes?.[selectedSizeIndex] || { label: 'Standard', price: product.price };
  const currentPrice = currentSize.price || product.price;

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addItem(product, currentSize, 1);
  };

  return (
    <div className="product-card" onClick={() => onSelectProduct(product.id)}>
      {/* Badge */}
      {product.badge && <span className="card-badge">{product.badge}</span>}

      {/* Image */}
      <div className="card-image-wrap">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={(e) => {
            // fallback if needed
            e.target.src = '/images/attas-bowls.jpg';
          }}
        />
      </div>

      {/* Body */}
      <div className="card-body">
        <div className="card-category">{product.categoryName}</div>
        <h3 className="card-title">{product.name}</h3>
        <p className="card-subtext">{product.subheading}</p>

        {/* Rating */}
        <div className="card-rating">
          <span className="material-symbols-outlined star" style={{ fontVariationSettings: "'FILL' 1" }}>
            star
          </span>
          <span>{product.rating.toFixed(1)}</span>
          <span style={{ color: 'var(--color-text-subtle)', fontWeight: 400 }}>
            ({product.reviewsCount})
          </span>
        </div>

        {/* Size Selection Pills */}
        {product.sizes && product.sizes.length > 1 && (
          <div
            style={{
              display: 'flex',
              gap: '0.35rem',
              marginBottom: '0.8rem',
              flexWrap: 'wrap'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {product.sizes.map((size, idx) => (
              <button
                key={size.label}
                type="button"
                style={{
                  padding: '0.2rem 0.55rem',
                  fontSize: '0.72rem',
                  fontWeight: selectedSizeIndex === idx ? 700 : 500,
                  borderRadius: 'var(--radius-xs)',
                  border: `1px solid ${
                    selectedSizeIndex === idx ? 'var(--color-primary)' : 'var(--color-outline-variant)'
                  }`,
                  backgroundColor:
                    selectedSizeIndex === idx ? 'var(--color-primary)' : 'var(--color-surface)',
                  color: selectedSizeIndex === idx ? '#fff' : 'var(--color-on-surface)'
                }}
                onClick={() => setSelectedSizeIndex(idx)}
              >
                {size.label}
              </button>
            ))}
          </div>
        )}

        {/* Card Footer */}
        <div className="card-footer">
          <div className="card-price">
            <span className="price-current">₹{currentPrice}</span>
            {product.originalPrice && (
              <span className="price-original">
                ₹{Math.round((product.originalPrice / product.price) * currentPrice)}
              </span>
            )}
          </div>

          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={handleAddToCart}
            title="Add to Basket"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>
              add_shopping_cart
            </span>
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};
