export default function Hero() {
  return (


    <div className="relative isolate overflow-hidden px-4 py-8 md:px-16 lg:flex lg:gap-x-20 ">
      <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto  lg:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
          Elevate Your Web Presence
          <br />
          with Our Web Development Services.
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-900">
          We specialize in creating stunning websites and web applications tailored to your needs.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
          <a
            href="#contact"
            className="rounded-md bg-green-500 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition duration-150 animate-bounce"
          >
            Get started
          </a>
          <a
            href="#portfolio"
            className="rounded-md bg-gray-300 text-black px-4 py-2 text-sm font-semibold shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition duration-150 animate-bounce"
          >
            Browse Projects <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <div className="relative h-auto mx-auto grid place-items-center ">
        <img
          className="w-[360px] lg:w-[450px] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
          src="/webdev.png"
          alt="Web Development"
          width={800}
          height={480}
        />
      </div>
    </div>


  );
}
