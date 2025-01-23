import { useContext } from 'react';
import { ShopContext } from '../context/ctxInit';
import PageTitle from '../components/Header/PageTitle';
import { addIcon, binIcon, minusIcon } from '../assets/icons';
import CartTotal from '../components/Cart/CartTotal';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const navigate = useNavigate();
  const {
    cartItems,
    currency,
    handleDeleteItem,
    handleUpdateCartItemQuantity,
  } = useContext(ShopContext);
  return (
    <main className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div className="border-t pt-14 ">
        <div className="text-2xl mb-3">
          <PageTitle title="YOUR CART" />
        </div>
        <div className="">
          {cartItems.length === 0 && (
            <p className="text-xl text-blue-500 text-center py-36">
              There is No Items in The Cart.
            </p>
          )}
          {cartItems.map((item) => (
            <div
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[1fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
              key={item.id}
            >
              <div className="flex items-start gap-6">
                <img
                  className="w-20 sm:w-36 h-16 sm:h-28"
                  src={'/' + item.images[0]}
                  alt={item.name}
                />
                <div className="">
                  <p className="text-xs sm:text-lg font-medium">{item.name}</p>
                  <div className="flex items-center gap-5 my-2">
                    <p>
                      {currency}
                      {item.price}
                    </p>
                  </div>
                  <p>{item.description}</p>
                </div>
              </div>
              <div className="flex gap-4 justify-between">
                <div className="flex gap-4">
                  <button
                    onClick={() => handleUpdateCartItemQuantity(item.id, 1)}
                    className="px-1  rounded-xl  hover:text-blue-600 transition-colors "
                  >
                    {addIcon}
                  </button>
                  <span className="border px-2 text-lg text-center border-[#8cd0fd8a] bg-white">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => handleUpdateCartItemQuantity(item.id, -1)}
                    className="px-1 rounded-xl hover:text-blue-600 transition-colors"
                  >
                    {minusIcon}
                  </button>
                </div>
                <button
                  onClick={() => handleDeleteItem(item.id)}
                  className="transition-colors hover:text-red-600 active:text-white"
                >
                  {binIcon}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end my-20">
          <div className="w-full sm:w-[450px]">
            <CartTotal />
            <div className="w-full text-end">
              <button
                onClick={() => navigate('/place-order')}
                className={`w-full  text-white py-3 px-6 my-4 transition duration-300 active:bg-blue-300 ${
                  cartItems.length > 0
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-blue-300'
                }`}
                disabled={cartItems.length === 0}
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
