import { createContext, useState } from 'react';
import { products } from '../assets/icons';

export const ShopContext = createContext({
  products: [],
  currency: '',
  delivery_fee: 0,
  search: '',
  showSearch: false,
  setSearch: () => {},
  setShowSearch: () => {},
});

// eslint-disable-next-line react/prop-types
export default function ShopContextProvider({ children }) {
  const currency = '$';
  const delivery_fee = 10;
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState('');

  const ctxValue = {
    products,
    currency,
    delivery_fee,
    search,
    showSearch,
    setSearch,
    setShowSearch,
  };

  return (
    <ShopContext.Provider value={ctxValue}>{children}</ShopContext.Provider>
  );
}
