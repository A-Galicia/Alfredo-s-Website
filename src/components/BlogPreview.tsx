import React from 'react';
import style from './BlogPreview.module.css';
import Image from 'next/image';
import { Blog } from '@/app/blogData';

export default function BlogPreview({
  title,
  date,
  description,
  image,
  imageAlt,
  slug,
}: Blog) {
  return (
    <div className={style.div}>
      <h3> {title} </h3>
      <div>
        <a href={slug}>
          <Image
            src={image}
            alt={imageAlt}
            width={300}
            height={300}
            className={style.img}
          />
        </a>
        <div>
          <p className={style.description}>
            Posted on: {new Date(date).toDateString()}
            <br></br>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
