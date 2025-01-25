import aboutUsHero from '../assets/about-us-hero.jpeg'; // Main hero image
import teamPhoto from '../assets/team-photo.jpeg'; // Team photo
import equipmentPhoto from '../assets/equipmentPhoto.jpeg';
import { qualityIcon, supportIcon, sustainabilityIcon } from '../assets/icons'; // Icon for quality

export default function About() {
  return (
    <main className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="relative h-96 rounded-lg overflow-hidden mb-12">
            <img
              src={aboutUsHero}
              alt="About Us Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl text-center">
                ABOUT US
              </h1>
            </div>
          </div>

          {/* Who We Are */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Who We Are</h2>
              <p className="mt-4 text-gray-600">
                Founded in [Year], [Your Company Name] was born out of a passion
                for supporting the foodservice industry. With [X years] of
                experience in the restaurant equipment business, we’ve built a
                reputation for providing top-notch new and pre-owned machines
                and devices to restaurants, cafes, bakeries, and catering
                businesses across [your region or globally].
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={teamPhoto}
                alt="Our Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* What We Offer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={equipmentPhoto}
                alt="Restaurant Equipment"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                What We Offer
              </h2>
              <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                <li>
                  <strong>New Equipment:</strong> State-of-the-art ovens,
                  refrigerators, coffee machines, and more from trusted brands.
                </li>
                <li>
                  <strong>Used Equipment:</strong> High-quality, inspected, and
                  refurbished pre-owned machines at affordable prices.
                </li>
                <li>
                  <strong>Expert Advice:</strong> Our team is here to guide you
                  to the right equipment for your needs.
                </li>
                <li>
                  <strong>Competitive Pricing:</strong> Affordable solutions
                  without compromising on quality.
                </li>
              </ul>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="p-8 rounded-lg shadow-xl mb-12">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Quality Assurance */}
              <div className="text-center">
                {qualityIcon}

                <h3 className="text-xl font-bold text-gray-900">
                  Quality Assurance
                </h3>
                <p className="mt-2 text-gray-600">
                  Every product we sell, whether new or used, meets our strict
                  quality standards.
                </p>
              </div>

              {/* Customer Support */}
              <div className="text-center">
                {supportIcon}

                <h3 className="text-xl font-bold text-gray-900">
                  Customer Support
                </h3>
                <p className="mt-2 text-gray-600">
                  Your satisfaction is our priority. We’re here to support you
                  every step of the way.
                </p>
              </div>

              {/* Sustainability */}
              <div className="text-center">
                {sustainabilityIcon}

                <h3 className="text-xl font-bold text-gray-900">
                  Sustainability
                </h3>
                <p className="mt-2 text-gray-600">
                  By offering refurbished equipment, we help reduce waste and
                  promote eco-friendly practices.
                </p>
              </div>
            </div>
          </div>

          {/* Our Mission */}
          <div className="p-8 rounded-lg shadow-xl mb-12">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Our Mission
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              Our mission is simple: to empower restaurant owners and operators
              with the tools they need to thrive. Whether you’re a small
              family-owned diner or a large-scale commercial kitchen, we’re here
              to provide the equipment and expertise to help you succeed.
            </p>
          </div>

          {/* Get in Touch */}
          <div className="p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              We’d love to hear from you! If you have any questions or need
              assistance, don’t hesitate to reach out to our friendly team at{' '}
              <a
                href="mailto:info@yourcompany.com"
                className="text-blue-600 hover:underline"
              >
                info@yourcompany.com
              </a>{' '}
              or call us at{' '}
              <a
                href="tel:+1234567890"
                className="text-blue-600 hover:underline"
              >
                +123 456 7890
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
