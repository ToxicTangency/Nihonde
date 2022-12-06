import { useState } from 'react';
import PostList from '../components/PostList';
import Loader from '../components/loader/Loader';
import { loadPosts } from './api/posts';
import MainContainer from '../components/MainContainer';
import MyButton from '../components/UI/MyButton/MyButton';
import { usePosts } from '../hooks/usePosts';
import PostFilter from '../components/PostFilter';
import CategoriesList from '../components/CategoriesList';
import { loadCategories } from './api/categories';

const LOAD_STEP = 6;
export default function Posts({ initialPosts, total, initialCategories }) {
  const [posts, setPosts] = useState(initialPosts);
  const [categories, setCategories] = useState(initialCategories);
  const [loadedAmount, setLoadedAmount] = useState(LOAD_STEP);
  const [isLoading, setIsLoadig] = useState(false);

  const [filter, setFilter] = useState({ query: '' });
  const searchedPosts = usePosts(posts, filter.query);

  const isLoadButton = total > loadedAmount;

  const getMorePosts = async () => {
    setIsLoadig(true);

    try {
      const data = await fetch(
        `/api/posts?start=${loadedAmount}&end=${loadedAmount + LOAD_STEP}`
      ).then(response => response.json());
      setLoadedAmount(loadedAmount + LOAD_STEP);
      setPosts([...posts, ...data.posts]);

      setIsLoadig(false);
    } catch (error) {
      console.log(error);
      setIsLoadig(false);
    }
  };

  return (
    <MainContainer title={'Блог'}>
      <div className='single-post__category'>Категории</div>
      <CategoriesList categories={categories} />
      <div className='single-post__category'>Новое</div>
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList posts={searchedPosts} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '10px',
        }}>
        {isLoadButton ? (
          <MyButton variant='black' onClick={getMorePosts} disabled={isLoading}>
            Загрузить ещё...
          </MyButton>
        ) : (
          <div>Все посты загружены</div>
        )}
      </div>
      <Loader />
    </MainContainer>
  );
}

export const getServerSideProps = async () => {
  const { posts, total } = await loadPosts(0, LOAD_STEP);
  const { categories } = await loadCategories();
  return {
    props: {
      initialPosts: posts,
      initialCategories: categories,
      total,
    },
  };
};
