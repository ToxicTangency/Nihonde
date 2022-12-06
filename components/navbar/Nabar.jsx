import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='header__nav'>
      <ul>
        <li className='header__nav-elem'>
          <Link href={'/'}>Главная</Link>
        </li>
        <li className='header__nav-elem'>
          <Link href={'/posts'}>Блог</Link>
        </li>
        <li className='header__nav-elem'>
          <Link href={'/about'}>О нас</Link>
        </li>
      </ul>
    </nav>
  );
}
