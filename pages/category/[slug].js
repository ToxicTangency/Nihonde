import { client } from '../../lib/client';
import MainContainer from '../../components/MainContainer';
import PostList from '../../components/PostList';
import { useEffect, useState } from 'react';
import dateFormat from '../../utils/dateFormat';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PostFilter from '../../components/PostFilter';
import { usePosts } from '../../hooks/usePosts';

export default function Category({ category }) {
  const [posts, setPosts] = useState(category.posts);

  const [filter, setFilter] = useState({ query: '' });
  const searchedPosts = usePosts(posts, filter.query);

  const location = useRouter();

  useEffect(() => {
    setPosts(category.posts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <MainContainer title={category.name}>
      <div className='single-post__category'>
        <Link href={'/posts'}>{'Блог'}</Link>
        <span>{' / '}</span>
        {category.name}
      </div>
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList posts={searchedPosts} />
    </MainContainer>
  );
}

export async function getStaticPaths() {
  const query = `*[_type == "categories"] {
        slug
    }`;

  const categories = await client.fetch(query);
  const paths = categories.map(category => ({
    params: {
      slug: category.slug,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params: { slug } }) {
  const query = `*[_type == "categories" && slug == '${slug}'][0]{
        "name":name,
        "posts": *[_type=='posts' && references(^._id)]{
            date, _id, image, text, title, slug,
            category->
        }
  }`;

  const category = await client.fetch(query);
  category.posts.map(post => (post.date = dateFormat(post.date)));
  return {
    props: {
      category,
    },
  };
}
