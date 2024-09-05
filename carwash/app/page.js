import Image from 'next/image';
import Header from '../components/headerr'; // Correct path for headerr.js
import Footer from '../components/footer';

import Pricing from '../components/pricing';
import PricingTint from '../components/pricingtint';
import PricingPaint from '../components/pricingpaint'; // Import the PricingPaint component

import '../styles/globals.css';

export default function Home() {
  return (
    <>
      <Header />
      
      <div className="bg-white">
        <h1 className="flex text-center justify-center font-bold text-5xl mt-8">Our Services</h1>

        <section>
          <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
            <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
              <div className="p-6">
                <Image
                  className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                  src="/carwash.jpg"
                  alt="Our Goal"
                  width={300}
                  height={200}
                  style={{ width: '100%', height: 'auto' }}
                  />
                <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Our Goal</h1>
                <p className="mx-auto text-base leading-relaxed text-gray-500">
                  At car wash NYC, our commitment is to deliver top-tier car services that go beyond your expectations. 
                  We strive to make your vehicle look as pristine as the day it left the showroom.
                </p>
                <a href="#" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more">Read More »</a>
              </div>
              
              <div className="p-6">
                <Image
                  className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                  src="/carwash.jpg"
                  alt="Our Services"
                  width={300}
                  height={200}
                  style={{ width: '100%', height: 'auto' }}
                  />
                <h1 id="services" className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Our Services</h1>
                <p className="mx-auto text-base leading-relaxed text-gray-500">
                  We provide an extensive array of car detailing services, including exterior and interior detailing, paint correction, and ceramic coating. Our team of professionals utilizes 
                 top-quality products and advanced techniques to ensure your car achieves its finest appearance.
                </p>
                <a href="#" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more">Read More »</a>
              </div>

              <div className="p-6">
                <Image
                  className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                  src="/carwash.jpg"
                  alt="More Info"
                  width={300}
                  height={200}
                  style={{ width: '100%', height: 'auto' }}
                  />
                <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">More Information</h1>
                <p className="mx-auto text-base leading-relaxed text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <a href="#" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more">Read More »</a>
              </div>
            </div>
          </div>
        </section>

        <Pricing />
        <PricingTint />
        <PricingPaint /> {/* Make sure this is correctly imported */}

        <section className="bg-white">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Visit Our Location</h2>
        </div>
        <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Google Maps - Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6056.3550994391635!2d-74.07917688805802!3d40.625966242758274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fb4b68f554b%3A0xdea39c4746478b5d!2s73%20Thompson%20St%2C%20Staten%20Island%2C%20NY%2010304!5e0!3m2!1sen!2sus!4v1725389665998!5m2!1sen!2sus"
              width="100%"
              height="480"
              className="border-0"
              allowFullScreen
              loading="lazy"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
</div>
                <div>
                    <div className="max-w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="px-6 py-4">
                            <h3 className="text-lg font-medium text-gray-900">Our Address</h3>
                            <p className="mt-1 text-gray-600">73 Thompson St, Staten Island, NY 10304</p>
                        </div>
                        <div className="border-t border-gray-200 px-6 py-4">
                            <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                            <p className="mt-1 text-gray-600">Monday - Friday: 9am - 5pm</p>
                            <p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                            <p className="mt-1 text-gray-600">Sunday: Closed</p>
                        </div>
                        <div className="border-t border-gray-200 px-6 py-4">
                            <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                            <p className="mt-1 text-gray-600">Email: gangsta@gangsta.com</p>
                            <p className="mt-1 text-gray-600">Phone: +1 234 765 1111</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


        <Footer />
      </div>
    </>
  );
}
