import { useState, useReducer } from 'react';
import { products } from '../assets/icons';
import { ShopContext, shoppingCartReducer } from './ctxInit';

// eslint-disable-next-line react/prop-types
export default function ShopContextProvider({ children }) {
  const currency = '$';
  const delivery_fee = 10;
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState('');
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    {
      items: [],
    }
  );

  function handleAddItemToCart(id) {
    shoppingCartDispatch({
      type: 'ADD_ITEM',
      payload: id,
    });
  }

  function handleDeleteItem(productId) {
    shoppingCartDispatch({
      type: 'DELETE_ITEM',
      payload: productId,
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: 'UPDATE_ITEM',
      payload: {
        productId,
        amount,
      },
    });
  }

  const ctxValue = {
    products,
    cartItems: shoppingCartState.items,
    currency,
    delivery_fee,
    search,
    showSearch,
    handleAddItemToCart,
    handleUpdateCartItemQuantity,
    handleDeleteItem,
    setSearch,
    setShowSearch,
  };

  return (
    <ShopContext.Provider value={ctxValue}>{children}</ShopContext.Provider>
  );
}
