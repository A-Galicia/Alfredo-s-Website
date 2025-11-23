'use client';
import Blog from '@/database/blogSchema';
import style from '@/components/BlogPreview.module.css';
import Comment from '@/components/Comment';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function BlogPage() {
  const [post, setPost] = useState<Blog | null>(null);
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const slug = params.slug as string;

  useEffect(() => {
    async function fetchBlog() {
      try {
        console.log('Fetching blog for slug:', params);
        const res = await fetch(`/api/blogs/${slug}`);
        if (!res.ok) {
          throw new Error('Blog not found');
        }
        const data = await res.json();
        setPost(data);
        console.log('Fetched blog data:', data);
      } catch (err) {
        console.error('Error fetching blog:', err);
        setError('Failed to get blog post.');
      } finally {
        setLoading(false);
      }
    }

    fetchBlog();
  }, [slug]);

  async function createComment(e: React.FormEvent) {
    e.preventDefault();

    try {
      const res = await fetch(`/api/blogs/${slug}/comment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, comment }),
      });

      if (!res.ok) {
        throw new Error('Failed to add comment');
      }
    } catch (err) {
      console.error('Error posting comment:', err);
      setError('Failed to post comment.');
    }

    window.location.reload();
  }

  if (loading) {
    return <div className={style.loading}>Loading...</div>;
  }

  return (
    <div className={style.div}>
      {error && <p>Error: {error}</p>}
      {post ? (
        <>
          <h1>{post.title}</h1>
          <p>{new Date(post.date).toDateString()}</p>
          <hr className={style.hr} />
          <div>{post.content}</div>
          <br />
          <hr className={style.hr} />
          <div>Comments:</div>
          {!post.comments
            ? null
            : post.comments.map((comment, index) => {
                return (
                  <Comment
                    key={index}
                    username={comment.username}
                    date={comment.date}
                    content={comment.comment}
                  />
                );
              })}
          <hr className={style.hr} />
          <div>Add your comment below!</div>

          <form className={style.form} onSubmit={createComment}>
            <label className={style.label} htmlFor='name'>
              Name:
              <input
                className={style.input}
                id='name'
                type='text'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete='name'
                required
              />
            </label>

            <label className={style.label} htmlFor='comment'>
              Comment:
              <input
                className={style.input}
                id='comment'
                type='text'
                name='comment'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              />
            </label>

            <button className={style.submit} type='submit'>Submit</button>
          </form>
        </>
      ) : null}
    </div>
  );
}
