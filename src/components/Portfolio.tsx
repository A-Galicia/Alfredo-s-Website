import React from 'react';
import style from './Portfolio.module.css';
import Image from 'next/image';
import Project from '@/database/projectSchema';
import connectDB from '@/database/db';

export default async function Portfolio() {
  await connectDB();

  let projects: Project[] = [];
  try {
    projects = await Project.find({}).orFail();
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err.message);
    } else {
      console.error('An unknown error occurred:', err);
    }
    return <p>Nothing Here...</p>;
  }

  return (
    <div>
      {projects.map((proj: Project) => (
        <div key={proj.title} className={style.project}>
          <p>{proj.title}</p>
          <a href={proj.url} target='_blank' rel='noopener noreferrer'>
            <Image
              src={proj.image}
              alt={proj.imageAlt}
              width={500}
              height={500}
              className={style.img}
            />
          </a>
        </div>
      ))}
    </div>
  );
}
