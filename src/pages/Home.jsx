import { lazy, Suspense } from 'react';
import Header from '../components/Header/Header';
import Title from '../components/Header/Title';
import Loading from '../components/Loading/Loading';

const FeaturedProducts = lazy(() =>
  import('../components/FeaturedProducts/FeaturedProducts')
);
const LatestProducts = lazy(() =>
  import('../components/LatestProducts/LatestProducts')
);

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-[#e3f2fd] pb-4">
        <Title className="text-4xl text-center mx-auto my-4"> Featured </Title>
        <div className="bg-white mb-4">
          <Suspense fallback={<Loading />}>
            <FeaturedProducts />
          </Suspense>
        </div>
        <Title className="text-4xl text-center mx-auto my-4 "> Latest </Title>
        <Suspense fallback={<Loading />}>
          <LatestProducts />
        </Suspense>
      </main>
    </>
  );
}
