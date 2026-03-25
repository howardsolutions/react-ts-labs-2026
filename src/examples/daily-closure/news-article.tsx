import { Card } from '$/common/components/card';
import { use } from 'react';
// import type { Post } from './types';
import z from 'zod';
import { currentDate } from './utilities';

type NewsArticleProps = {
  id: number;
};

const PostSchema = z.object({
  id: z.coerce.number(),
  title: z.string(),
  body: z.string().nullable(),
  authorEmail: z.email(),
  published: z.coerce.boolean(),
  tags: z.array(z.string()).default([]),
  metadata: z.record(z.string(), z.unknown()),
});

type Post = z.infer<typeof PostSchema>;

// function isPost(value: unknown): value is Post {
//   return PostSchema.safeParse(value).success;
// }

const fetchArticle = async (id: number): Promise<Post> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const possiblePosts = response.json();

  return PostSchema.parse(possiblePosts);
};

export const NewsArticle = ({ id = 1 }: NewsArticleProps) => {
  // Important: The type for article is any because the API returns.

  // const [article, setArticle] = useState<Post | null>(null);

  // useEffect(() => {
  //   fetchArticle(id).then((data) => setArticle(data));
  // }, [id]);

  // if (!article) return null;

  // New use() hook and suspense types in React 19 used for resolving promises of a suspense

  const article = use(fetchArticle(id));

  return (
    <Card as="article" className="space-y-4 font-mono md:first:col-span-2">
      <header className="flex items-start justify-between">
        <h2 className="text-lg font-semibold">{article?.title}</h2>
        <p className="text-sm whitespace-nowrap text-gray-500">{currentDate}</p>
      </header>
      <p>{article?.body}</p>
    </Card>
  );
};
