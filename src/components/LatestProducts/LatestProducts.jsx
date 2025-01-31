import { useContext } from 'react';
import { ShopContext } from '../../context/ctxInit.js';
import ProductCard from '../Product/ProductCard';

export default function LatestProducts() {
  const { products } = useContext(ShopContext);

  return (
    <>
      <section className="products grid gap-2 mb-8  p-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </>
  );
}
