import { createContext } from 'react';

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  currency: '',
  token: '',
  backEndURL: '',
  delivery_fee: 0,
  search: '',
  showSearch: false,
  handleAddItemToCart: () => {},
  handleUpdateCartItemQuantity: () => {},
  handleDeleteItem: () => {},
  handleResetCart: () => {},
  setSearch: () => {},
  setShowSearch: () => {},
  setToken: () => {},
});
