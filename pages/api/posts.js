import { client } from '../../lib/client';
import dateFormat from '../../utils/dateFormat';

export default async function posts(req, res) {
  const { start, end } = req.query;

  if (isNaN(Number(start)) || isNaN(Number(end))) {
    return res.sendStatus(400).end();
  }

  const { posts, total } = await loadPosts(start, end);

  res.status(200).json({
    posts,
    total,
  });
}

export async function loadPosts(start, end) {
  const query = `{
    "posts":*[_type == "posts"] | order(date desc) [${start}...${end}]{
      date, _id, image, text, title, slug,
      category->
    },
    "total":count(*[_type == "posts"])
  }`;
  const { posts, total } = await client.fetch(query);
  posts.map(post => (post.date = dateFormat(post.date)));
  return { posts, total };
}
