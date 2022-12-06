import Link from 'next/link';

export default function CategoriesList({ categories }) {
  return (
    <div
      className='categories'
      style={{ display: 'flex', justifyContent: 'space-between' }}>
      {categories.map(category => (
        <div className='single-post__title small' key={category.slug}>
          <Link href={`/category/${category.slug}`}>{category.name}</Link>
        </div>
      ))}
    </div>
  );
}
