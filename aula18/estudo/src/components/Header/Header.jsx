import{ useState, useEffect } from 'react';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import { HeaderIconsDesktop, HeaderIconsMobileLeft, HeaderIconsMobileRight } from '../HeaderIcons/HeaderIcons';
import './Header.css';

function Header() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768)
    }
    window.addEventListener('resize', handleResize)
  })

  return isDesktop ? <DesktopHeader /> : <MobileHeader />
}

function DesktopHeader() {
  return (
    <header>
      <div className="green-header">
        <p>Enjoy Free Shipping On All Orders</p>
      </div>
      <div className="header-main">
        <Logo />
        <Navbar />
        <HeaderIconsDesktop />
      </div>
    </header>
  );
}

function MobileHeader() {
  return (
    <header>
      <div className="green-header">
        <p>Enjoy Free Shipping On All Orders</p>
      </div>
      <div className="header_main-mobile">
        <HeaderIconsMobileLeft />
        <Logo />
        <HeaderIconsMobileRight />
      </div>
    </header>
  );
}

export default Header;
