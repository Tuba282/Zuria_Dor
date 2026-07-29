export const saveCart = (cartItems) => {
  localStorage.setItem('cart_items', JSON.stringify(cartItems));
};

export const getCart = () => {
  const items = localStorage.getItem('cart_items');
  return items ? JSON.parse(items) : [];
};

export const clearCart = () => {
  localStorage.removeItem('cart_items');
};
