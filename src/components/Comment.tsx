import React from 'react';
import style from './Comment.module.css';

type CommentProps = {
  username: string;
  date: Date;
  content: string;
};

export default function Comment({
  username,
  date,
  content,  
}: CommentProps) {
  return (
    <div className={style.comment}>
      <h4 className={style.h4}>{username}: &nbsp;</h4>
      <span className={style.span}>{new Date(date).toDateString()}</span>
      <p className={style.p}>{content}</p>
    </div>
  );
}
