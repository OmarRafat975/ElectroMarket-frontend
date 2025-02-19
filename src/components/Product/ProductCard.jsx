import { useContext } from 'react';
import { ShopContext } from '../../context/ctxInit.js';
import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
export default function ProductCard({ product }) {
  const { currency, handleAddItemToCart } = useContext(ShopContext);
  let classCard =
    'product sm:h-[30rem] p-3 mt-5 rounded mx-auto max-w-[20rem] ';

  return (
    <div className={classCard}>
      <Link to={`/product/${product.id}`}>
        <img
          src={product.images[0]}
          className="card-img-top w-fit"
          alt={product.name}
        />
        <div className="border-t h-[5rem] mb-5">
          <h3 className="text-blue-500 text-xl font-semibold mb-2">
            {product.name}
          </h3>
          <p className="text-gray-700">{product.description}</p>
        </div>
      </Link>
      <div className="flex justify-between items-center">
        <button
          onClick={() => handleAddItemToCart(product.id)}
          type="button"
          className="btn border rounded border-blue-500 text-blue-500 font-bold py-2 px-8 hover:bg-blue-500 hover:text-white transition-colors"
        >
          Buy
        </button>
        <p className="flex items-center justify-between text-lg font-bold mb-2 h-[5rem]">
          {currency}
          {product.price}
        </p>
      </div>
    </div>
  );
}
