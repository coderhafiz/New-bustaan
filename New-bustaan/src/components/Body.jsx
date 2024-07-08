import AboutUs from "./AboutUs"

const Body = () => {
  return (
    <>
      <div className=" min-h-[50vh]">
            <section className=" w-full relative min-h-[50vh] " style={{backgroundImage: 'url(bustan_Hero.png)', backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundOrigin: "content-box", backgroundPosition: "top"}}>
        
              <div className="grid max-w-screen px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12  bg-black/60  z-[1000] min-h-[50vh] md:min-h-[80vh] sm:place-content-center">
                  <div className="mr-auto place-self-center lg:col-span-7  flex flex-col gap-5 w-full ">
                      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-6xl xl:text-6xl text-center">Making <span className="text-yellow-300"> organic</span> and <span className="text-yellow-300">delicious</span> drinks</h1>
                      <p className="max-w-2xl mb-6 font-light text-yellow-300 lg:mb-8 md:text-xl lg:text-3xl text-center">Fresh, Fantastic, Nourishing</p>
                      
                      <a href="https://bit.ly/OrderBustaan" className="flex  place-content-center  w-full py-3 text-base font-bold text-white border md:border-white rounded-lg bg-yellow-300 md:bg-transparent  md:hover:bg-yellow-300 focus:scale-95 md:focus:ring-4 md:focus:ring-gray-100  ">
                          Buy now
                      </a> 
                  </div>
                  <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                      <img className="w-[50%] -rotate-12 z-10" src="Bustan_edit_1.png" alt="mockup" loading="lazy"/>
                      <img className="w-[50%] rotate-12 -translate-x-5 scale-95" src="Bustan_edit_1.png" alt="mockup" loading="lazy"/>
                  </div>                
                  
              </div>

            </section> 
        
      </div>
      {/* hero section */}

      <AboutUs/>
      {/* About us section */}

        <h1 className="text-2xl text-center mt-40 mb-10 text-slate-400" id="products">Products</h1>
        {/* title */}

      <div className="flex justify-evenly mb-40 mt-5 flex-col sm:flex-row w-full p-5 gap-5 ">
        <div className="card w-full lg:w-[35%] bg-base-100 shadow-xl">
          <figure><img src="bustan_scaled.png" alt="drinks" /></figure>
          <div className="card-body flex flex-row justify-around">
            <h2 className="card-title">50cl</h2>
            <div className="card-actions ">
              <button className="btn bg-yellow-300 text-white"><a href="https://bit.ly/OrderBustaan">Buy Now</a></button>
            </div>
          </div>
        </div>
        {/* first card */}
        <div className="card w-full lg:w-[35%] bg-base-100 shadow-xl">
          <figure><img src="bustan_scaled.png" alt="drinks" /></figure>
          <div className="card-body flex flex-row justify-around">
            <h2 className="card-title">100cl</h2>
            <div className="card-actions">
              <button className="btn bg-yellow-300 text-white"><a href="https://bit.ly/OrderBustaan">Buy Now</a></button>
            </div>
          </div>
        </div>
        {/* second card */}
        
      </div>
    </>
        
  )
}

export default Body