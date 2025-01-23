import { createContext } from 'react';
import { products } from '../assets/icons';

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  currency: '',
  delivery_fee: 0,
  search: '',
  showSearch: false,
  handleAddItemToCart: () => {},
  handleUpdateCartItemQuantity: () => {},
  handleDeleteItem: () => {},
  setSearch: () => {},
  setShowSearch: () => {},
});

export function shoppingCartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = products.find((product) => product.id === action.payload);
      updatedItems.push({
        id: action.payload,
        ...product,
        quantity: 1,
      });
    }

    return {
      ...state,
      items: updatedItems,
    };
  }

  if (action.type === 'UPDATE_ITEM') {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.productId
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += action.payload.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
    };
  }

  if (action.type === 'DELETE_ITEM') {
    const updatedItems = structuredClone(state.items);
    const updatedItemIndex = updatedItems.findIndex((item) => {
      return item.id === action.payload;
    });

    updatedItems.splice(updatedItemIndex, 1);

    return {
      ...state,
      items: updatedItems,
    };
  }
}
