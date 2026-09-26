import React from 'react';
import { useCart } from '../context/CartContext';

export const Toast = () => {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="toast-container" role="status" aria-live="polite">
      <span className="material-symbols-outlined">check_circle</span>
      <span>{toastMessage}</span>
    </div>
  );
};
