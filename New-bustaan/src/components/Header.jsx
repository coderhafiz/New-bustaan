import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => {

  const scrollToTop = () => {
    scroll.scrollToTop();
  };





  return (
    
        <>

         <div className="drawer sticky top-0 z-[1000]" >
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 

            <div className="drawer-content flex flex-col ">
              <div className="w-full navbar bg-amber-500 shadow-xl  text-white">
                    <div className="flex-none lg:hidden">
                      <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                      </label>
                    </div> 
                    {/* sandwitch icon */}
                    <div tabIndex={0} className="flex-1 px-2 mx-2 font-extrabold text-2xl active:text-yellow-200 "><Link onClick={scrollToTop} >Bustaan</Link></div>
                    {/* logo */}
                    <div className="flex-none hidden lg:block">
                      <ul className=" flex justify-around gap-5 items-center">
                        <li className='hover:underline active:scale-95'><Link onClick={scrollToTop} >Home</Link></li>
                        <li className='hover:underline active:scale-95'><Link  
                                  to="about" 
                                  spy={true} 
                                  smooth={true} 
                                  offset={-50} 
                                  duration={500} 
                                  >About us</Link></li>
                        <li className='hover:underline active:scale-95'><Link  
                                  to="products" 
                                  spy={true} 
                                  smooth={true} 
                                  offset={-80} 
                                  duration={500} 
                                  >Products</Link></li>
                        <a href='https://bit.ly/OrderBustaan'><li className="bg-yellow-300 hover:bg-yellow-400 rounded-btn p-3 active:scale-95 font-light">Buy now</li></a>
                      </ul>
                    </div>
                    {/* Navbar menu content here */}
              </div>
            </div> 
              {/* Navbar */}

            <div className="drawer-side  z-[1000]">
              <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay h-full"></label> 
              <ul className=" p-4 w-80 min-h-full bg-amber-500  text-white relative text-3xl">
                
                 <Link onClick={scrollToTop}> <li tabIndex={0} className='text-center focus:bg-yellow-300 p-3 rounded-md w-full'>Home </li></Link>
                            <Link
                            to="about" 
                            spy={true} 
                            smooth={true} 
                            offset={-50} 
                            duration={500}
                            
                            > <li tabIndex={0} className='focus:bg-yellow-300 p-3 rounded-md text-center'  >About us </li></Link>
                            <Link
                            to="products" 
                            spy={true} 
                            smooth={true} 
                            offset={-80} 
                            duration={500} 
                            > <li tabIndex={0} className='focus:bg-yellow-300 p-3 rounded-md text-center'>Products</li></Link>
                    

                  <footer className="footer footer-center p-10 landscape:p-5  bg-transparent rounded text-white absolute landscape:relative bottom-0 landscape:scale-75 landscape:flex landscape:justify-center  landscape:flex-col landscape:overflow-scroll">
                    <nav>
                        <div className="grid grid-flow-col gap-4 font-bold">
                            <p>Social:</p>
                            <a href=' https://www.instagram.com/albustaani?igsh=YzljYTk1ODg3Zg=='><p>Instagram</p></a>
                            <a href='https://bit.ly/OrderBustaan'><p>Whatsapp</p></a>
                        </div>
                    </nav> 
                    <aside>
                        <p>© 2024 - All right reserved by Bustaan</p>
                    </aside>
                  </footer>
                  
                  
              </ul>
                  {/* content */}
                  
            </div>
            {/* Sidebar content here */}
         </div>

        </>

  )
}

export default Header