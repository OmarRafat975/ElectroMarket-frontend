import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
export default function ProductCard({ product }) {
  const { currency } = useContext(ShopContext);

  return (
    <div className="product w-fit h-fit p-3 mt-5 rounded">
      <Link to={`/product/${product.id}`}>
        <img
          src={'/' + product.image}
          className="card-img-top w-full"
          alt={product.name}
        />
        <div className="border-t pt-5 mb-5">
          <h3 className="text-blue-500 text-xl font-semibold mb-2">
            {product.name}
          </h3>
          <p className="text-gray-700">{product.description}</p>
        </div>
      </Link>
      <div className="flex justify-between items-center">
        <button
          to=""
          type="button"
          className="btn border rounded border-blue-500 text-blue-500 font-bold py-2 px-8 hover:bg-blue-500 hover:text-white transition-colors"
        >
          Buy
        </button>
        <p className="text-lg font-bold mb-0">
          {product.price} {currency}
        </p>
      </div>
    </div>
  );
}
