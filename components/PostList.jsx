import PostItem from './PostItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function PostList({ posts }) {
  return (
    <div className='post-grid'>
      <TransitionGroup className='post-grid__wrapper'>
        {posts.map(post => (
          <CSSTransition key={post._id} timeout={500} classNames='post'>
            <PostItem number={post._id} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}
