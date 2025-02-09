import { useState, useReducer, useEffect, useCallback } from 'react';
import { ShopContext } from './ctxInit';
import axios from 'axios';
import { toast } from 'react-toastify';

// eslint-disable-next-line react/prop-types
export default function ShopContextProvider({ children }) {
  const currency = '$';
  const delivery_fee = 10;
  const backEndURL = import.meta.env.VITE_BACKEND_URL;

  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState('');
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    {
      items: [],
    }
  );

  function getTotalPrice(cartItems) {
    return cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  }

  async function handleAddItemToCart(productId) {
    shoppingCartDispatch({
      type: 'ADD_ITEM',
      payload: productId,
    });

    if (token) {
      try {
        await axios.patch(
          backEndURL + '/cart/add',
          { productId },
          { headers: { authorization: 'Bearer ' + token } }
        );
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  }

  async function handleDeleteItem(productId) {
    shoppingCartDispatch({
      type: 'DELETE_ITEM',
      payload: productId,
    });

    if (token) {
      try {
        await axios.patch(
          backEndURL + '/cart/delete',
          { productId },
          { headers: { authorization: 'Bearer ' + token } }
        );
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  }

  function handleResetCart() {
    shoppingCartDispatch({
      type: 'RESET_CART',
    });
  }

  async function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: 'UPDATE_ITEM',
      payload: {
        productId,
        amount,
      },
    });

    if (token) {
      try {
        await axios.patch(
          backEndURL + '/cart/update',
          { productId, amount },
          { headers: { authorization: 'Bearer ' + token } }
        );
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  }

  const getProducts = useCallback(
    async function getProducts() {
      try {
        const response = await axios.get(backEndURL + '/products');

        if (response.data.status === 'success') {
          setProducts(response.data.data);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    },
    [backEndURL]
  );

  const getCartItems = useCallback(
    async function getCartItems(token) {
      try {
        const response = await axios.get(backEndURL + '/cart', {
          headers: { authorization: 'Bearer ' + token },
        });
        if (response.data.status === 'success') {
          shoppingCartDispatch({
            type: 'SET_CART',
            payload: response.data.cartData,
          });
        }
      } catch (error) {
        console.log(error);

        toast.error(error.response.data.message);
      }
    },
    [backEndURL]
  );

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  useEffect(() => {
    if (!token && localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));
      getCartItems(localStorage.getItem('token'));
    }
  }, [getCartItems, token]);

  function shoppingCartReducer(state, action) {
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
        const product = products.find(
          (product) => product.id === action.payload
        );
        updatedItems.push({
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

    if (action.type === 'RESET_CART') {
      return {
        ...state,
        items: [],
      };
    }

    if (action.type === 'SET_CART') {
      return {
        ...state,
        items: action.payload,
      };
    }
  }

  const ctxValue = {
    products,
    cartItems: shoppingCartState.items,
    backEndURL,
    currency,
    delivery_fee,
    token,
    search,
    showSearch,
    getTotalPrice,
    handleAddItemToCart,
    handleUpdateCartItemQuantity,
    handleDeleteItem,
    handleResetCart,
    setSearch,
    setShowSearch,
    setToken,
  };

  return (
    <ShopContext.Provider value={ctxValue}>{children}</ShopContext.Provider>
  );
}
