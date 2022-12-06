import { useState } from 'react';
import CategoriesList from '../components/CategoriesList';
import MainContainer from '../components/MainContainer';
import MainSlider from '../components/MainSlider';
import { loadPosts } from './api/posts';
import { loadCategories } from './api/categories';

export default function Home({ initialPosts, initialCategories }) {
  const [posts, setPosts] = useState(initialPosts);
  const [categories, setCategories] = useState(initialCategories);

  return (
    <MainContainer title={'Main'}>
      <MainSlider posts={posts} />
      <div>
        <div className='single-post__category'>Категории</div>

        <CategoriesList categories={categories} />
      </div>
    </MainContainer>
  );
}

export const getServerSideProps = async () => {
  const { posts } = await loadPosts(0, 6);
  const { categories } = await loadCategories();
  return {
    props: {
      initialPosts: posts,
      initialCategories: categories,
    },
  };
};
