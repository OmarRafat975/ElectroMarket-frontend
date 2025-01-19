import { createContext } from 'react';
import { products } from '../assets/icons';

export const ShopContext = createContext();

// eslint-disable-next-line react/prop-types
export default function ShopContextProvider({ children }) {
  const currency = '$';
  const delivery_fee = 10;
  const ctxValue = {
    products,
    currency,
    delivery_fee,
  };

  return (
    <ShopContext.Provider value={ctxValue}>{children}</ShopContext.Provider>
  );
}
