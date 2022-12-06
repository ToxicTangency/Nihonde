import { useMemo } from 'react';

export const usePosts = (posts, query) => {
  const searchedPosts = useMemo(() => {
    return posts.filter(
      post =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.category.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, posts]);

  return searchedPosts;
};
