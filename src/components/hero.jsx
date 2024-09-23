
function Hero() {
  return (
    <div className="flex flex-col justify-between gap-20 mx-10 lg:flex-row lg:items-center">
      <div className="mt-10">
        <h1 className="text-4xl font-semibold leading-normal lg:text-6xl">
          Building digital product & brands.
        </h1>
       
        <div className="">
        <p className="mt-4 text-lg">
        Here at Flowbite we focus on markets where technology, innovation, and 
        capital can unlock long-term value and drive economic growth.
        </p></div>
        
        <div className="flex flex-col gap-3 mt-10 md:flex-row">
          <a href="#" className="items-center inline px-6 py-2 font-medium text-white duration-300 bg-primary rounded-2xl">
            Start 30-day free trial
          </a>
          <a href="#" className="inline px-6 py-2 font-medium border-2 bg-slate-50 rounded-2xl">
            Pricing & FAQ
          </a>
        </div>
      </div>
      
      <div className="flex mt-10 ">
        <img src="src/assets/marketing-strategy.png"  width={600} height={400} alt="Marketing Strategy" />
        
      </div>
      
    </div>
  );
}

export default Hero;