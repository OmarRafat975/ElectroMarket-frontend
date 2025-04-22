import { useContext } from 'react';
import { ShopContext } from '../../context/ctxInit.js';
import ProductCard from '../Product/ProductCard';
import Loading from '../Loading/Loading.jsx';

export default function LatestProducts() {
  const { products, loading } = useContext(ShopContext);

  return (
    <>
      <section className="products grid gap-2 mb-8  p-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        {loading ? (
          <Loading />
        ) : (
          products.map((product, index) => {
            if (index < 5) {
              return <ProductCard key={product.id} product={product} />;
            } else return;
          })
        )}
      </section>
    </>
  );
}
