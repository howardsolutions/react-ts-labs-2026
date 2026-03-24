import { Card } from '$/common/components/card';
import { useEffect, useState } from 'react';
// import type { Post } from './types';
import { currentDate } from './utilities';
import z from 'zod';

type NewsArticleProps = {
  id: number;
};

const PostSchema = z.object({
  id: z.number(),
  title: z.string(),
  body: z.string(),
});

type Post = z.infer<typeof PostSchema>;

const fetchArticle = async (id: number): Promise<Post> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const possiblePosts = response.json();

  return PostSchema.parse(possiblePosts);
};

export const NewsArticle = ({ id = 1 }: NewsArticleProps) => {
  // Important: The type for article is any because the API returns.

  const [article, setArticle] = useState<Post | null>(null);

  useEffect(() => {
    fetchArticle(id).then((data) => setArticle(data));
  }, [id]);

  if (!article) return null;

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
