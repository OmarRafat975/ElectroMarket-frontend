import { useCallback, useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ctxInit';
import PageTitle from '../components/Header/PageTitle';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function Orders() {
  const { currency, backEndURL, token } = useContext(ShopContext);
  const [orders, setOrders] = useState([]);

  function formatDate(date) {
    if (!date || isNaN(new Date(date).getTime())) {
      return ''; // Fallback for invalid dates
    }
    const dateTimeFormat = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'long',
    });
    return dateTimeFormat.format(new Date(date));
  }

  const getOrders = useCallback(
    async function getOrders() {
      try {
        if (token) {
          const response = await axios.get(backEndURL + '/orders/user-orders', {
            headers: { authorization: 'Bearer ' + token },
          });

          if (response.data.status === 'success') {
            setOrders(response.data.ordersData);
          } else {
            toast.error(response.data.message);
          }
        }
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      }
    },
    [backEndURL, token]
  );

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  return (
    <main className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div className="border-t pt-16">
        <div className="text-2xl mb-4">
          <PageTitle title="MY ORDERS" />
        </div>
        <div className="">
          {orders.length === 0 && (
            <div className="text-center my-[10rem] mx-auto text-2xl text-blue-600">
              There Is No Orders Yet.
            </div>
          )}
          {orders.length > 0 &&
            orders.map((order, index) => {
              return (
                <div
                  key={index}
                  className="border border-blue-500 mb-1 px-6 py-2 rounded shadow-lg last:mb-8"
                >
                  <p className="text-blue-600 text-2xl font-bold underline">
                    Ordered ({formatDate(order[0].orderedDate)}):
                  </p>
                  <div className="flex flex-col md:flex-row">
                    <div className="flex-1">
                      {order.map((product) => (
                        <div
                          className="py-4 border-y text-blue-600  flex flex-col md:flex-row md:items-center md:justify-between gap-4 "
                          key={product.id}
                        >
                          <div className="flex flex-col sm:flex-row items-start gap-6 text-sm">
                            <img
                              className="w-16 sm:w-20 h-16 sm:h-20 "
                              src={product.images[0]}
                              alt={product.name}
                            />
                            <div>
                              <p className="sm:text-base font-medium">
                                {product.name}
                              </p>
                              <div className="flex items-center  gap-3 mt-1 text-base text-gray-600">
                                <p>
                                  {currency} {product.price}
                                </p>
                                <p>Quantity: {product.quantity}</p>
                              </div>
                              <p className="mt-1">
                                Date:
                                <span className="text-gray-400 ">
                                  {' '}
                                  {new Date(product.orderedDate).toDateString()}
                                </span>
                              </p>
                              <p className="mt-1">
                                Payment:
                                <span className="text-gray-400 ">
                                  {' '}
                                  {product.paymentMethod}
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="md:w-1/2 flex justify-between">
                            <div className="flex items-center gap-2">
                              <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                              <p className="text-sm md:text-base">
                                {product.status}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button
                      disabled
                      className="h-10 block px-4 py-2 text-sm font-medium rounded text-white bg-blue-300 ml-auto my-auto"
                    >
                      Track Order
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </main>
  );
}
