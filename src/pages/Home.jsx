import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import Header from '../components/Header/Header';
import Title from '../components/Header/Title';
import LatestProducts from '../components/LatestProducts/LatestProducts';
import PaginationLinks from '../components/Products/PaginationLinks';

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-[#e3f2fd] pb-4">
        <Title className="text-4xl text-center mx-auto my-4"> Featured </Title>
        <div className="bg-white mb-4">
          <FeaturedProducts />
        </div>
        <Title className="text-4xl text-center mx-auto my-4 "> Latest </Title>
        <LatestProducts />
        <PaginationLinks />
      </main>
    </>
  );
}
