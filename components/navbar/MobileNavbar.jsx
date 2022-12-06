import Link from 'next/link';

export default function MobileNavbar({ openMenu }) {
  return (
    <nav className='menu__body'>
      <ul className='menu__list'>
        <li className='menu__item'>
          <Link className='menu__link' href={'/'} onClick={openMenu}>
            Главная
          </Link>
        </li>
        <li className='menu__item'>
          <Link className='menu__link' href={'/posts'} onClick={openMenu}>
            Блог
          </Link>
        </li>
        <li className='menu__item'>
          <Link className='menu__link' href={'/about'} onClick={openMenu}>
            О нас
          </Link>
        </li>
      </ul>
    </nav>
  );
}
