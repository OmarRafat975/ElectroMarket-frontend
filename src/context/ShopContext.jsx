import { useState, useReducer, useEffect, useCallback } from 'react';
import { ShopContext } from './ctxInit';
import axios from '.././api/axios';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { toast } from 'react-toastify';
import shoppingCartReducer from './cartReducer';
import authReducer from './authReducer';
import ordersReducer from './ordersReducer';

// eslint-disable-next-line react/prop-types
export default function ShopContextProvider({ children }) {
  const axiosPrivate = useAxiosPrivate();
  const currency = '$';
  const delivery_fee = 10;
  const backEndURL = import.meta.env.VITE_BACKEND_URL;

  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);

  const [authState, authDispatch] = useReducer(authReducer, {
    token: undefined,
    name: undefined,
  });

  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    {
      items: [],
    }
  );

  const [orders, ordersDispatch] = useReducer(ordersReducer, { orders: [] });

  //////////////////////AUTH REDUCER/////////////////////////

  const handleLoginOrRefresh = useCallback(async function handleLoginOrRefresh(
    token,
    name,
    type
  ) {
    authDispatch({
      type,
      payload: { token, name },
    });
  },
  []);

  async function handleLogout() {
    authDispatch({
      type: 'LOGOUT',
    });
  }

  ///////////////////////REFRESH FN/////////////////////////

  const refreshToken = useCallback(async () => {
    try {
      const response = await axios.get('/users/user/refresh', {
        withCredentials: true,
      });

      if (response.data.status === 'success') {
        handleLoginOrRefresh(
          response.data.token,
          response.data.name,
          'REFRESH'
        );
      }
    } catch (error) {
      if (error) return;
    }
  }, [handleLoginOrRefresh]);

  ////////////////////////////////////////CART REDUCER////////////////////////////////////////////

  //-----------ADD ITEMS TO CART------------//
  async function handleAddItemToCart(productId) {
    try {
      if (authState.token) {
        await axiosPrivate.patch(
          '/cart/add',
          { productId },
          { withCredentials: true }
        );
      }

      shoppingCartDispatch({
        type: 'ADD_ITEM',
        payload: { id: productId, products },
      });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  //-----------UPDATE ITEMS IN CART------------//
  async function handleUpdateCartItemQuantity(productId, amount) {
    try {
      if (authState.token) {
        await axiosPrivate.patch(
          '/cart/update',
          { productId, amount },
          {
            withCredentials: true,
          }
        );
      }

      shoppingCartDispatch({
        type: 'UPDATE_ITEM',
        payload: {
          productId,
          amount,
        },
      });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  //-----------DELETE ITEMS FROM CART------------//
  async function handleDeleteItem(productId) {
    try {
      if (authState.token) {
        await axiosPrivate.patch(
          '/cart/delete',
          { productId },
          {
            withCredentials: true,
          }
        );
      }

      shoppingCartDispatch({
        type: 'DELETE_ITEM',
        payload: productId,
      });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  //-----------CLEAR CART------------//
  function handleResetCart() {
    shoppingCartDispatch({
      type: 'RESET_CART',
    });
  }

  ///////////////////////ORDERS REDUCER/////////////////////////////

  function setOrders(orders) {
    ordersDispatch({ type: 'SET', payload: { orders } });
  }

  ///////////////INIT GET ITEMS FN////////////////////

  function getTotalPrice(cartItems) {
    return cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  }

  //-----------GET CART ITEMS------------//
  const getCartItems = useCallback(
    async function getCartItems() {
      try {
        const response = await axiosPrivate.get('/cart', {
          withCredentials: true,
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
    [axiosPrivate]
  );
  //-----------GET ORDERS------------//
  const getOrders = useCallback(
    async function getOrders() {
      try {
        const response = await axiosPrivate.get('/orders/user-orders');

        if (response.data.status === 'success') {
          setOrders(response.data.ordersData);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      }
    },
    [axiosPrivate]
  );
  //-----------GET PRODUCTS------------//
  const getProducts = useCallback(async function getProducts() {
    try {
      const response = await axios.get('/products');

      if (response.data.status === 'success') {
        setProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }, []);

  //-------------TRY TO GET USER ON START
  useEffect(() => {
    refreshToken();
  }, [refreshToken]);

  //-------------IF USER GET CART ITEMS
  useEffect(() => {
    if (authState.token) {
      getCartItems();
    }
  }, [authState.token, getCartItems]);
  //-------------IF USER GET SAVED ORDERS
  useEffect(() => {
    if (authState.token) {
      getOrders();
    }
  }, [authState.token, getOrders]);
  //-------------GET PRODUCTS ON START
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  //---------------CONTEXT VALUES ASSIN
  const ctxValue = {
    products,
    cartItems: shoppingCartState.items,
    backEndURL,
    currency,
    delivery_fee,
    authState,
    search,
    showSearch,
    orders,
    handleLoginOrRefresh,
    handleLogout,
    getTotalPrice,
    handleAddItemToCart,
    handleUpdateCartItemQuantity,
    handleDeleteItem,
    handleResetCart,
    setOrders,
    setSearch,
    setShowSearch,
  };

  return (
    <ShopContext.Provider value={ctxValue}>{children}</ShopContext.Provider>
  );
}
