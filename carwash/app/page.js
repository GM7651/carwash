import Image from 'next/image';
import Header from '../components/headerr';
import Footer from '../components/footer';
import Pricing from '../components/pricing';
import PricingTint from '../components/pricingtint';
import PricingPaint from '../components/pricingpaint';

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
                  layout="responsive"
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
                  layout="responsive"
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
                  layout="responsive"
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
        <PricingPaint />
        <div className="map-container relative w-full overflow-hidden pb-[56.25%] h-0 mt-0 ml-auto mr-auto">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.705907747154!2d-74.0032774!3d40.724490200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598c60d96d3f%3A0x8a68bf355d920734!2s69%20Thompson%20St%2C%20New%20York%2C%20NY%2010012!5e0!3m2!1sen!2sus!4v1724301464651!5m2!1sen!2sus"
    className="absolute top-0 left-0 w-full h-96 border-2"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md max-w-lg mx-auto -mt-">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">
        Shop Hours
      </h2>
      <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-lg">
        <li className="flex justify-between">
          <span>Monday:</span>
          <span>8:00 AM – 6:00 PM</span>
        </li>
        <li className="flex justify-between">
          <span>Tuesday:</span>
          <span>8:00 AM – 6:00 PM</span>
        </li>
        <li className="flex justify-between">
          <span>Wednesday:</span>
          <span>8:00 AM – 6:00 PM</span>
        </li>
        <li className="flex justify-between">
          <span>Thursday:</span>
          <span>8:00 AM – 6:00 PM</span>
        </li>
        <li className="flex justify-between">
          <span>Friday:</span>
          <span>8:00 AM – 6:00 PM</span>
        </li>
        <li className="flex justify-between">
          <span>Saturday:</span>
          <span>9:00 AM – 5:00 PM</span>
        </li>
        <li className="flex justify-between">
          <span>Sunday:</span>
          <span>Closed</span>
        </li>
      </ul>
    </div>

        <Footer />
      </div>
    </>
  );
}
