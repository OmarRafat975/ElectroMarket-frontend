import { useContext } from 'react';
import { ShopContext } from '../../context/ctxInit.js';
import EmblaCarousel from './EmblaCarousel';
import Loading from '../Loading/Loading.jsx';

const OPTIONS = { dragFree: true, loop: true };
export default function FeaturedProducts() {
  const { products, loading } = useContext(ShopContext);
  const featuredProducts = products.filter((product) => product.isFeatured === true);

  return (
    <>
      <section className="mb-4 ">{loading ? <Loading /> : <EmblaCarousel slides={featuredProducts} options={OPTIONS} />}</section>
    </>
  );
}
