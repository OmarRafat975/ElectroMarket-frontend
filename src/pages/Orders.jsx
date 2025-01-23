import { useContext } from 'react';
import { ShopContext } from '../context/ctxInit';
import PageTitle from '../components/Header/PageTitle';

export default function Orders() {
  const { products, currency } = useContext(ShopContext);
  return (
    <main className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div className="border-t pt-16">
        <div className="text-2xl mb-4">
          <PageTitle title="MY ORDERS" />
        </div>
        <div className="">
          {products.slice(1, 4).map((product) => (
            <div
              className="py-4 border-y text-blue-600  flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              key={product.id}
            >
              <div className="flex items-start gap-6 text-sm">
                <img
                  className="w-16 sm:w-20 h-16 sm:h-20 "
                  src={`/${product.images[0]}`}
                  alt={product.name}
                />
                <div>
                  <p className="sm:text-base font-medium">{product.name}</p>
                  <div className="flex items-center  gap-3 mt-2 text-base text-gray-600">
                    <p className="text-lg">
                      {currency}
                      {product.price}
                    </p>
                    <p>Quantity: 1</p>
                  </div>
                  <p className="mt-2">
                    Date: <span className="text-gray-400 "> 25, Jul 2025</span>
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-between">
                <div className="flex items-center gap-2">
                  <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                  <p className="text-sm md:text-base">Ready to ship</p>
                </div>
                <button className="border px-4 py-2 text-sm font-medium rounded-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                  Track Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
