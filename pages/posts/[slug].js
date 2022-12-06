import { client } from '../../lib/client';
import Image from 'next/image';
import urlFor from '../../lib/client';
import MainContainer from '../../components/MainContainer';
import { PortableText } from '@portabletext/react';
import BlockContent from '../../components/BlockContent';
import Link from 'next/link';
import dateFormat from '../../utils/dateFormat';

export default function Post({ post }) {
  return (
    <MainContainer title={post.title}>
      <div className='single-post'>
        <div className='single-post__wraper'>
          <div className='single-post__image'>
            {post.image && (
              <Image
                src={urlFor(post.image).url()}
                alt=''
                width={660}
                height={900}
                rel='preload'
                style={{ width: '100%', height: 'auto' }}
              />
            )}
          </div>

          <div className='single-post__content'>
            <div className='single-post__category'>
              <Link href={'/posts'}>{'Блог'}</Link>
              <span>{' / '}</span>
              <Link href={`/category/${post.category.slug}`}>
                {post.category.name}
              </Link>
            </div>

            <div className='single-post__title'>{post.title}</div>

            <div className='single-post__description'>
              <PortableText value={post.text} components={BlockContent} />
            </div>

            <div className='single-post__author'>{post.date}</div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
}

export async function getStaticPaths() {
  const query = `*[_type == "posts"] {
        slug{
            current
        }
    }`;

  const posts = await client.fetch(query);
  const paths = posts.map(post => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params: { slug } }) {
  const query = `*[_type == "posts" && slug.current == '${slug}'][0]{
    date, _id, image, text, title, slug,
    category->
  }`;

  const post = await client.fetch(query);
  post.date = dateFormat(post.date);
  return {
    props: {
      post,
    },
  };
}
