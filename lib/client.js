import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

const clientConfig = {
  projectId: 'epd7a49a',
  dataset: 'production',
};

export const client = createClient({
  projectId: clientConfig.projectId,
  dataset: clientConfig.dataset,
  apiVersion: '2022-03-25',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: true,
});

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export default urlFor;
