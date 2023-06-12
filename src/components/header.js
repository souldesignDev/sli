import logo from '../images/logo.svg';
import { useEffect, useState } from 'react';
function Header(props) {
  const [ menuOpen, setMenuOpen ] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("");
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY1 = window.scrollY;
      const direction = scrollY1 > lastScrollY ? "scrolled" : "";
      if (direction !== scrollDirection && (scrollY1 - lastScrollY > 10 || scrollY1 - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY1 > 0 ? scrollY1 : 0;
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);
  return (
    <div className='main-header-container'>
      <div className={`header-container ${scrollDirection}`}>
        <div className="logo-container">
          <img src={logo} className='logo' alt="logo" />
        </div>
        <ul className='menu-container'>
          <li className='menu-item-container'>
            <a href='#whoWeAre' className='menu-item'> Who we are </a>
          </li>
          <li className='menu-item-container'>
            <a href='#whatWeDo' className='menu-item'> What we do </a>
          </li>
          <li className='menu-item-container'>
            <a href='#theNeed' className='menu-item'> The need </a>
          </li>
          <li className='menu-item-container'>
            <a href='#portofolio' className='menu-item'> Portofolio </a>
          </li>
          <li className='menu-item-container'>
            <a href='#contactUs' className='menu-item'> Contact us </a>
          </li>
        </ul>
        <div className={`menu-button ${menuOpen ? 'open' : 'close'}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span className='firstDot'></span>
          <span className='secondDot'></span>
          <span className='thirdDot'></span>
          <span className='fourthDot'></span>
        </div>

        <div className={`mobile-menu-container ${menuOpen ? 'open' : 'close'}`}>
          {menuOpen && <div className='modal' onClick={() => setMenuOpen(!menuOpen)}></div>}
          <div className='mobile-menu'>
            <ul>
              <li className='menu-item-container'>
                <a href='#whoWeAre' className='menu-item'> Who we are </a>
              </li>
              <li className='menu-item-container'>
                <a href='#whatWeDo' className='menu-item'> What we do </a>
              </li>
              <li className='menu-item-container'>
                <a href='#theNeed' className='menu-item'> The need </a>
              </li>
              <li className='menu-item-container'>
                <a href='#portofolio' className='menu-item'> Portofolio </a>
              </li>
              <li className='menu-item-container'>
                <a href='#contactUs' className='menu-item'> Contact us </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header;