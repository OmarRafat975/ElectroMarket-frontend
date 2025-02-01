import { useContext } from 'react';
import { ShopContext } from '../../context/ctxInit.js';
import Title from '../Header/Title.jsx';

export default function CartTotal() {
  const { cartItems, delivery_fee, getTotalPrice, currency } =
    useContext(ShopContext);
  const totalItemsPrice = getTotalPrice(cartItems);

  return (
    <div className="w-full">
      <div className="text-2xl my-8">
        <Title>TOTALS</Title>
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Suptotal:</p>
          <p>
            {currency}
            {totalItemsPrice}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency}
            {+totalItemsPrice > 0 ? delivery_fee.toFixed(2) : '0.00'}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Total</p>
          <p>
            {currency}
            {+totalItemsPrice > 0
              ? (+totalItemsPrice + delivery_fee).toFixed(2)
              : '0.00'}
          </p>
        </div>
      </div>
    </div>
  );
}
