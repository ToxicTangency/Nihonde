import MainContainer from '../components/MainContainer';
import { PortableText } from '@portabletext/react';
import BlockContent from '../components/BlockContent';
import Image from 'next/image';
import { client } from '../lib/client';
import urlFor from '../lib/client';

export default function About({ about }) {
  console.log(about);
  return (
    <MainContainer title={'О нас'}>
      <div className='aboutPage'>
        <div className='single-post__title'>{about.title}</div>
        <div className='single-post__category'>{about.phrase}</div>
        {about.image && <Image src={urlFor(about.image).url()} alt='' fill />}
        <div className='single-post__description'>
          <PortableText value={about.text} components={BlockContent} />
        </div>
      </div>
    </MainContainer>
  );
}

export async function getStaticProps() {
  const query = `*[_type == "about"][0]`;

  const about = await client.fetch(query);
  return {
    props: {
      about,
    },
  };
}
