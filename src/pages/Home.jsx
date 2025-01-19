import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import Header from '../components/Header/Header';
import MainHeading from '../components/Header/MainHeading';
import LatestProducts from '../components/LatestProducts/LatestProducts';
import PaginationLinks from '../components/Product/PaginationLinks';

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-[#e3f2fd] pb-4">
        <div className="bg-white pb-4">
          <MainHeading> Featured </MainHeading>
          <FeaturedProducts />
          <MainHeading> Latest </MainHeading>
        </div>
        <LatestProducts />
        <PaginationLinks />
      </main>
    </>
  );
}
