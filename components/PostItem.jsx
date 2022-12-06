import Image from 'next/image';
import Link from 'next/link';
import urlFor from '../lib/client';

export default function PostItem(props) {
  return (
    <div className='post-card'>
      <div className='post-card__image'>
        <Link href={`/posts/${props.post.slug.current}`}>
          <Image
            src={urlFor(props.post.image).url()}
            alt=''
            width={384}
            height={520}
            style={{ width: '100%', height: 'auto' }}
          />
        </Link>
      </div>
      <div className='post-card__content'>
        <div className='single-post__category'>
          <Link href={`/category/${props.post.category.slug}`}>
            {props.post.category.name}
          </Link>
        </div>
        <div className='single-post__title small'>
          <Link href={`/posts/${props.post.slug.current}`}>
            {props.post.title}
          </Link>
        </div>
        <div className='single-post__author'>
          {props.post.date} {/*{props.post.author} */}
        </div>
      </div>
    </div>
  );
}
