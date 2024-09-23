function Hero() {
  return (
    <div className="flex flex-col p-8 lg:flex-row lg:items-center lg:justify-between lg:p-20">
      <div className="mt-10 lg:ml-40 lg:mt-0">
        <h1 className="text-4xl font-semibold leading-normal md:text-5xl lg:text-6xl">
          Building digital <br />product & brands.
        </h1>
        <br />
        <div className="">
        <p className="mt-4 text-base md:text-lg">
          Here at Flowbite we focus on markets where technology, innovation, and <br />
          capital can unlock long-term value and drive economic growth.
        </p></div>
        
        <div className="mt-10 space-x-4">
          <a href="#" className="inline px-6 py-2 font-medium text-white duration-300 bg-purple-700 md:px-8 md:py-3 rounded-2xl">
            Start 30-day free trial
          </a>
          <a href="#" className="inline gap-3 px-6 py-2 font-medium border-2 md:px-8 md:py-3 bg-slate-50 rounded-2xl">
            Pricing & FAQ
          </a>
        </div>
      </div>
      
      <div className="flex mt-10 lg:mt-0 lg:w-1/2 md:flex-row">
        <img src="src/assets/marketing-strategy.png" className="w-full h-auto" alt="Marketing Strategy" />
      </div>
    </div>
  );
}

export default Hero;