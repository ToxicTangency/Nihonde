import { client } from '../../lib/client';

export async function loadCategories() {
  const query = `*[_type == "categories"]`;
  const categories = await client.fetch(query);

  return { categories };
}
