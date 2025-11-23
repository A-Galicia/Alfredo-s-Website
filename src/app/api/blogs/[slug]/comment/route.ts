import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/database/db';
import Blog from '@/database/blogSchema';

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  await connectDB();

  const body = await req.json();

  // DB slug format is blogs/slug-value
  const { slug } = (await params);
  const fullslug = 'blogs/' + slug;

  if (!body.comment || !body.name) {
    console.error('Invalid comment data:', body);
    return NextResponse.json('Invalid comment data.', { status: 400 });
  }

  try {
    // push the new comment into the comments array
    const res = await Blog.findOneAndUpdate(
      { slug: fullslug },
      {
        $push: {
          comments: {
            username: body.name,
            comment: body.comment,
            date: new Date(),
          },
        },
      },
      { upsert: true }
    ).exec();

    if (!res) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json('Comment added successfully.', { status: 201 });
  } catch (err) {
    console.error('Error fetching blog by slug:', err);
    return NextResponse.json('Server error', { status: 500 });
  }
}
