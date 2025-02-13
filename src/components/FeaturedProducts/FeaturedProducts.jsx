import { useContext } from 'react';
import { ShopContext } from '../../context/ctxInit.js';
import EmblaCarousel from './EmblaCarousel';

const OPTIONS = { dragFree: true, loop: true };
export default function FeaturedProducts() {
  const { products } = useContext(ShopContext);
  const featuredProducts = products.filter(
    (product) => product.isFeatured === true
  );

  return (
    <>
      <section className="mb-4 ">
        <EmblaCarousel slides={featuredProducts} options={OPTIONS} />
      </section>
    </>
  );
}
