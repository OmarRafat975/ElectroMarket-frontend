import { createContext } from 'react';

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  orders: [],
  currency: '',
  authState: {},
  backEndURL: '',
  delivery_fee: 0,
  search: '',
  showSearch: false,
  loading: false,
  handleLoginOrRefresh: () => {},
  handleLogout: () => {},
  getTotalPrice: () => {},
  handleAddItemToCart: () => {},
  handleUpdateCartItemQuantity: () => {},
  handleDeleteItem: () => {},
  handleResetCart: () => {},
  setOrders: () => {},
  setSearch: () => {},
  setShowSearch: () => {},
});
