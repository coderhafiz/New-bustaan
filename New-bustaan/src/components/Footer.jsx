import { Link, animateScroll as scroll } from 'react-scroll';


const Footer = () => {

    const scrollToTop = () => {
        scroll.scrollToTop();
      };



  return (
    
    <footer className="footer footer-center p-10 bg-transparent text-base-content rounded">
            <nav>
                <div className="grid grid-flow-col gap-4 font-bold">
                            <p>Social:</p>
                            <a href=' https://www.instagram.com/albustaani?igsh=YzljYTk1ODg3Zg=='><p>Instagram</p> </a>
                            <a href='https://bit.ly/OrderBustaan'>Whatsapp</a>
                </div>
            </nav> 
            <aside>
               
                <p>© 2024 - All right reserved by Bustaan</p>
            </aside>
  </footer>

  )
}

export default Footer