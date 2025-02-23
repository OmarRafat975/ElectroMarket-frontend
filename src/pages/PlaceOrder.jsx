import { useContext, useState } from 'react';
import { logos } from '../assets/icons';
import CartTotal from '../components/Cart/CartTotal';
import Title from '../components/Header/Title';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ctxInit';
import { useActionState } from 'react';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { toast } from 'react-toastify';

export default function PlaceOrder() {
  const axiosPrivate = useAxiosPrivate();
  const { cartItems, getTotalPrice, handleResetCart } = useContext(ShopContext);
  const navigate = useNavigate();
  const [payment, setPayment] = useState('cod');

  async function submitAction(prevState, formData) {
    const data = Object.fromEntries(formData);
    const totalPrice = getTotalPrice(cartItems);

    switch (payment) {
      case 'cod': {
        const response = await axiosPrivate.post('/orders/cash', {
          products: cartItems,
          address: data,
          totalPrice,
        });
        if (response.data.status === 'success') {
          toast.success('Order Placed Successfully');
          navigate('/my-orders');
          handleResetCart();
          window.location.reload();
        } else {
          toast.error(response.data.message);
          return { enteredValues: { ...data } };
        }
        break;
      }

      case 'stripe':
        {
          const responseStripe = await axiosPrivate.post('/orders/stripe', {
            products: cartItems,
            address: data,
            totalPrice,
          });

          if (responseStripe.data.status === 'success') {
            toast.done('Order Placed!');
            window.location.replace(responseStripe.data.sessionUrl);
          } else {
            toast.error(responseStripe.data.message);
          }
        }
        break;

      default:
        break;
    }
  }

  const [formState, formAction] = useActionState(submitAction, {});

  return (
    <main className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <form
        action={formAction}
        className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t"
      >
        {/* Left Side */}
        <div className="flex  flex-col gap-4 w-full sm:max-w-[480px]">
          <div className="text-xl sm:text-2xl my-3">
            <Title>DELEVERY INFORMATION</Title>
          </div>
          <div className="flex gap-3">
            <input
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              name="firstName"
              placeholder="First Name"
              defaultValue={formState.enteredValues?.firstName}
            />
            <input
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              name="lastName"
              placeholder="Last Name"
              defaultValue={formState.enteredValues?.lastName}
            />
          </div>
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="email"
            name="email"
            placeholder="Email Address"
            defaultValue={formState.enteredValues?.email}
            required
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            name="street"
            placeholder="Street"
            defaultValue={formState.enteredValues?.street}
            required
          />

          <div className="flex gap-3">
            <input
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              name="city"
              placeholder="City"
              defaultValue={formState.enteredValues?.city}
              required
            />
            <input
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              name="state"
              placeholder="State"
              defaultValue={formState.enteredValues?.state}
              required
            />
          </div>

          <div className="flex gap-3">
            <input
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              name="country"
              placeholder="Country"
              defaultValue={formState.enteredValues?.country}
              required
            />
            <input
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="number"
              name="zip"
              placeholder="Zipcode"
              defaultValue={formState.enteredValues?.zip}
              required
            />
          </div>
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            name="phone"
            placeholder="Phone"
            defaultValue={formState.enteredValues?.phone}
            required
          />
        </div>
        {/* Right Side */}
        <div className="mt-8">
          <div className="mt-8 min-w-80">
            <CartTotal />
          </div>
          <div className="mt-12">
            <Title className="my-6">PAYMENT METHOD</Title>
            <div className="flex gap-3 flex-col lg:flex-row">
              <div
                onClick={() => setPayment('stripe')}
                className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
              >
                <p
                  className={`min-w-3.5 h-3.5 border border-blue-500 rounded-full ${
                    payment === 'stripe' ? 'bg-blue-500' : ''
                  }`}
                ></p>
                <img
                  className="h-6 mx-4 "
                  src={logos.stripeLogo}
                  alt="Stripe Logo"
                />
              </div>
              <div
                onClick={() => setPayment('cod')}
                className="flex items-center gap-3 border  p-2 px-3 cursor-pointer"
              >
                <p
                  className={`min-w-3.5 h-3.5 border border-blue-500 rounded-full  ${
                    payment === 'cod' ? 'bg-blue-500' : ''
                  }`}
                ></p>
                <p className="text-gray-500 text-sm font-medium mx-4">
                  CASH ON DELEVERY
                </p>
              </div>
            </div>
            {cartItems.length === 0 && (
              <p className="text-lg text-red-500 text-center mt-5">
                There is No Items in The Cart!
              </p>
            )}
            <div className="w-full text-end">
              <button
                type="submit"
                className={`w-full  text-white py-3 px-6 my-4 transition duration-300 active:bg-blue-300 ${
                  cartItems.length > 0
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-blue-300'
                }`}
                disabled={cartItems.length === 0}
              >
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
