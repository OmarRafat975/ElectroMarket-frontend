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
        <div className="my-10 flex flex-col justify-center gap-10 mb-28">
          <div className="border border-[#8cd0fd] rounded">
            <Map className={' md:h-[25rem]'} />
          </div>
          <div className="flex flex-col justify-center items-start gap-6 md:flex-row md:justify-between">
            <div className="flex flex-col justify-center items-start gap-6">
              <p className="font-semibold text-xl text-gray-600">Our Store</p>
              <p className="text-gray-500">Somewhere 99 A, 2256 AW Anywhere</p>
              <p className="text-gray-500">
                Tel: +00 (0)11 33 44 55 <br />
                +00 (0)11 555 45 85 <br /> Email: admin@gmail.com
              </p>
            </div>

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
