import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import EmblaCarousel from './EmblaCarousel';

const OPTIONS = { dragFree: true, loop: true };
export default function FeaturedProducts() {
  const { products } = useContext(ShopContext);
  return (
    <>
      <section className="mb-4 ">
        <EmblaCarousel slides={products} options={OPTIONS} />
      </section>
    </>
  );
}
