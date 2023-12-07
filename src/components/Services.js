import Link from 'next/link';


const Services = () => {
  return (


    <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-3 xl:gap-16 bg-indigo-700 text-white py-8 px-8 md:px-16">
      {/* Service - Web Development */}
      <div className="flex flex-col items-center">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>

        <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">Web Development</h3>
        <p className="mb-2 text-center text-gray-200">
          We create custom web applications and websites tailored to your unique business needs.
        </p>
        {/* <Link href="/service/web-development" className="font-bold text-gray-100 transition duration-100 hover:text-gray-300 active:text-indigo-700">
        Learn More
      
    </Link> */}
      </div>

      {/* Service - Web Design */}
      <div className="flex flex-col items-center">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>

        <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">Web Design</h3>
        <p className="mb-2 text-center text-gray-200">
          We craft visually stunning and user-friendly websites that leave a lasting impression.
        </p>
        {/* <Link href="/service/web-design" className="font-bold text-gray-100 transition duration-100 hover:text-gray-300 active:text-indigo-700">
      
        Learn More
      
    </Link> */}
      </div>

      {/* Service - SEO Optimization */}
      <div className="flex flex-col items-center">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        </div>

        <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">SEO Optimization</h3>
        <p className="mb-2 text-center text-gray-200">
          We boost your online visibility and drive organic traffic with our SEO strategies.
        </p>
        {/* <Link href="/service/seo-optimization" className="font-bold text-gray-100 transition duration-100 hover:text-gray-300 active:text-indigo-700">
      
        Learn More
      
    </Link> */}
      </div>
    </div>

  )
}

export default Services