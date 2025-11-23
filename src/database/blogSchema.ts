import mongoose, { Schema } from 'mongoose';

// typescript type (can also be an interface)
type IComment = {
  username: string;
  comment: string;
  date: Date;
};

type Blog = {
  title: string;
  slug: string;
  date: Date;
  description: string; // for preview
  content: string; // text content for individual blog page
  image: string; // url for string in public
  imageAlt: string; // alt for image
  comments: IComment[]; // array for comments
};

const commentSchema = new Schema<IComment>(
  {
    username: { type: String, required: true, trim: true },
    comment: { type: String, required: true, trim: true },
    date: { type: Date, default: Date.now },
  },
  { _id: false } // comments are embedded, don't need their own _id
);

// mongoose schema
const blogSchema = new Schema<Blog>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  description: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
  content: { type: String, required: true },
  comments: { type: [commentSchema], default: [] },
});

// defining the collection and model
const Blog = mongoose.models['blogs'] || mongoose.model('blogs', blogSchema);

export default Blog;
