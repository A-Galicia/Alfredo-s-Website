import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/database/db';
import blogSchema from '@/database/blogSchema';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  // If { params } looks confusing, check the note below this code block

  await connectDB(); // function from db.ts before
  const { slug } = await params; // another destructure

  const fullSlug = 'blogs/' + slug; // DB slug format is blogs/slug-value

  try {
    const blog = await blogSchema.findOne({ slug: fullSlug }).orFail();
    return NextResponse.json(blog);
  } catch (err) {
    console.error('Error fetching blog by slug:', err);
    return NextResponse.json('Blog not found.', { status: 404 });
  }
}
