import MobileNavbar from './navbar/MobileNavbar';
import Navbar from './navbar/Nabar';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const openMenu = () => {
    var root = document.getElementsByTagName('html')[0];
    root.classList.toggle('menu-open');
  };

  return (
    <header className='header' data-scroll='120' data-scroll-show>
      <div className='header__container'>
        <div className='header__menu menu'>
          <button
            onClick={openMenu}
            type='button'
            className='menu__icon icon-menu'>
            <span></span>
          </button>
          <MobileNavbar openMenu={openMenu} />
        </div>

        <div className='header__logo'>
          <Link className='menu__link' href={'/'}>
            <Image src='/logo.png' alt='' width={122} height={19} />
          </Link>
        </div>

        <Navbar />
      </div>
    </header>
  );
}
