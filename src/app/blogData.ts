export interface Blog {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
  content?: string;
  comments?: string[];
}

const blogs: Blog[] = [
  {
    title: 'Health',
    date: '10/9/2025',
    description: 'A blog about health',
    image: '/Corpman.jpeg',
    imageAlt: 'Eagle, Globe, and Anchor',
    slug: 'blogs/health.html',
  },
  {
    title: 'Lifting',
    date: '11/9/2022',
    description: 'A blog about lifting',
    image: '/OpenPowerlifting.png',
    imageAlt: 'Open Powerlifting logo',
    slug: 'blogs/lifting.html',
  },
];

export default blogs;
