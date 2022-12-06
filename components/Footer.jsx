import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__top'>
          <div className='footer__logo'>
            <Image src='/logo-w.png' alt='' width={122} height={19} />
          </div>
          <div className='footer__copyright'>© 2022 Hihonde</div>
        </div>

        <div className='footer__menu'>
          <div className='footer__categories'>
            <div className='footer__tag'>Категории</div>

            <div className='footer__categories-wrapper'>
              <div className='footer__category'>
                <Link href={'/category/history'}>История</Link>
              </div>
              <div className='footer__category'>
                <Link href={'/category/food'}>Кухня</Link>
              </div>
              <div className='footer__category'>
                <Link href={'/category/architecture'}>Архитектура</Link>
              </div>
              <div className='footer__category'>
                <Link href={'/category/nature'}>Природа</Link>
              </div>
              <div className='footer__category'>
                <Link href={'/category/modern-culture'}>
                  Современная культура
                </Link>
              </div>
            </div>
          </div>

          <div className='footer__categories'>
            <div className='footer__tag'>Меню</div>
            <div className='footer__categories-wrapper'>
              <div className='footer__category'>
                <Link href={'/'}>Главная</Link>
              </div>
              <div className='footer__category'>
                <Link href={'/posts'}>Блог</Link>
              </div>
              <div className='footer__category'>
                <Link href={'/about'}>О нас</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
