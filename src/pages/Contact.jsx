import { Link } from 'react-router-dom';
import Map from '../components/Footer/Map';
import PageTitle from '../components/Header/PageTitle';

export default function Contact() {
  return (
    <main className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div>
        <div className="text-2xl border-t pt-10 flex items-center justify-center">
          <PageTitle title="CONTACT Us" />
        </div>
        <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
          <div className="border border-[#8cd0fd] w-full md:max-w-[480px] h-[15rem] md:h-[30rem]">
            <Map />
          </div>
          <div className="flex flex-col justify-center items-start gap-6">
            <p className="font-semibold text-xl text-gray-600">Our Store</p>
            <p className="text-gray-500"> Weerenweg 35 B, 1161 AG Zwanenburg</p>
            <p className="text-gray-500">
              Tel: +31 (0)20 497 63 25 <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +31 (0)64 555 95
              53 <br /> Email: admin@gmail.com
            </p>

            <Link
              to="/products"
              className="border border-blue-600 px-8 py-4 text-sm hover:bg-blue-600 hover:text-white transition-all duration-500"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
