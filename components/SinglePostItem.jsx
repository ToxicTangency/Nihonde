import Link from 'next/link';
import urlFor from '../lib/client';
import MyButton from './UI/MyButton/MyButton';

export default function PostItem(props) {
  const background = urlFor(props.post.image).url();
  const postStyle = {
    backgroundImage: `url(${background})`,
  };

  return (
    <div className='single-post' style={postStyle}>
      <div className='single-post__wraper'>
        <div className='single-post__content'>
          <div className='single-post__title'>
            <Link href={`/posts/${props.post.slug.current}`}>
              {props.post.title}
            </Link>
          </div>

          <div className='single-post__category'>
            <Link href={`/category/${props.post.category.slug}`}>
              {props.post.category.name}
            </Link>
          </div>
          <Link href={`/posts/${props.post.slug.current}`}>
            <MyButton>Перейти</MyButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
