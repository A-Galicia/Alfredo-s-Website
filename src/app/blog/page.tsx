import BlogPreview from '@/components/BlogPreview';
import connectDB from '@/database/db';
import Blog from '@/database/blogSchema';
import { Suspense } from 'react';
import CSS from 'csstype';

const centerStyle: CSS.Properties = {
  justifySelf: 'center',
  alignSelf: 'center',
  fontSize: '2rem',
};

export default async function BlogPage() {
  async function getBlogs() {
    await connectDB(); // function from db.ts before

    try {
      // query for all blogs and sort by date
      const blogsArr = await Blog.find().sort({ date: -1 }).orFail();
      // send a response as the blogs as the message
      return blogsArr;
    } catch (err) {
      console.error('Error fetching blogs:', err);
      return null;
    }
  }

  const blogs = await getBlogs();
  if (!blogs) {
    return (
      <Suspense fallback={<p style={centerStyle}>Loading blog posts...</p>}>
        <div>No blog posts yet.</div>
      </Suspense>
    );
  }

  return (
    <div>
      <Suspense fallback={<p style={centerStyle}>Loading blog posts...</p>}>
        {blogs.map((blog) => (
          <BlogPreview
            key={blog.slug}
            title={blog.title}
            date={blog.date}
            description={blog.description}
            image={blog.image}
            imageAlt={blog.imageAlt}
            slug={blog.slug}
            content={blog.content}
            comments={blog.comments}
          />
        ))}
      </Suspense>
    </div>
  );
}
