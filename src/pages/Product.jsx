import { useContext, useState } from 'react';

import { Link, useParams } from 'react-router-dom';
import { backHeadIcon } from '../assets/icons';
import { ShopContext } from '../context/ctxInit.js';

export default function Product() {
  const { products, handleAddItemToCart, currency } = useContext(ShopContext);
  const { productId } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find((item) => item.id === productId);

  if (!product) {
    return <div>Loading...</div>; // Or a 404 message
  }

  const productImages = product.images;

  return (
    <>
      <main className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Link
          to="/products"
          className="relative flex items-center justify-start gap-1 text-center text-xl text-blue-600 hover:text-blue-800 transition-colors border-r border-y w-fit border-blue-600 hover:border-blue-800 pr-4"
        >
          {backHeadIcon}
          Back
        </Link>
        <div className=" py-4 bg-transparent rounded-lg">
          <div className="flex flex-col md:flex-row">
            {/* Product Image Gallery */}
            <div className="md:w-1/2">
              {/* Main Image */}
              <div className="w-full h-96 rounded-lg overflow-hidden border border-[#8cd0fd8a] flex items-center justify-center">
                <img
                  src={productImages[selectedImage]}
                  alt={`Product Image ${selectedImage + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Thumbnails */}
              <div className="flex mt-4 space-x-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index
                        ? 'border-blue-600'
                        : 'border-gray-200'
                    } hover:border-blue-400 transition duration-300`}
                  >
                    <img
                      src={image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
              <h1 className="text-3xl font-bold text-gray-800 border-b-4 w-fit border-black rounded">
                {product.name}
              </h1>
              <p className="mt-4 text-gray-600">{product.richDescription}</p>
              <div className="mt-6">
                <span className="text-2xl font-semibold text-gray-900">
                  {currency}
                  {product.price}
                </span>
              </div>
              <div className="mt-6">
                <button
                  onClick={() => {
                    handleAddItemToCart(productId);
                  }}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 active:bg-blue-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
