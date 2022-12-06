import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import SinglePostItem from './SinglePostItem';

export default function MainSlider({ posts }) {
  const latestPosts = posts; //.slice(0, 3)
  return (
    <div className='mainSwiperWrapper'>
      <Swiper
        className='postsSwiper'
        // autoplay={{ delay: 4000 }}
        pagination={{ clickable: true, dynamicBullets: true }}
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}>
        {latestPosts.map((post, index) => (
          <SwiperSlide key={post._id} virtualIndex={index}>
            <SinglePostItem number={post._id} post={post} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
