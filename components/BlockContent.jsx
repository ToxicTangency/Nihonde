import urlFor from '../lib/client';
import Image from 'next/image';

const SampleImageComponent = ({ value }) => {
  return (
    <Image
      src={urlFor().image(value).url()}
      alt={value.alt || ' '}
      width={300}
      height={600}
      loading='lazy'
    />
  );
};

const BlockContent = {
  block: {},
  types: {
    image: SampleImageComponent,
  },
};

export default BlockContent;
