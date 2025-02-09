import Map from './Map';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-8" id="footer">
      <div className="container m-auto px-4 flex justify-between max-xl:flex-wrap">
        {/* Social Section */}
        <div className="mb-8 sm:w-[25%]">
          <h1 className="text-2xl font-bold mb-4">Electro Markt</h1>
          <p className="text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            nulla rem, dignissimos iste aspernatur
          </p>
        </div>

        {/* Important Links Section */}
        <div className="mb-8">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                &rarr; Important Link 1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                &rarr; Important Link 2
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                &rarr; Important Link 3
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="mb-8">
          <ul className="space-y-2">
            <li>
              <div className="text-gray-400">
                Somewhere 99 A, 2256 AW Anywhere
              </div>
            </li>
            <li>
              <div className="text-gray-400">
                Business Hours: From 10:00 To 18:00
              </div>
            </li>
            <li>
              <div className="text-gray-400 space-y-1">
                <span>+00 (0)11 33 44 55</span>
                <br />
                <span>+00 (0)11 555 45 85</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Map Section */}
        <Map className={'lg:w-[15rem] lg:h-[15rem]'} />
      </div>
      <div>
        <p className="py-5 text-sm text-center">
          Copyright 2024&copy; electromarket.com - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
