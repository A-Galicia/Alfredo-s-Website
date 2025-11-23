import React from 'react';
import style from './navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className={style.navbar}>
      <h1> Alfredo&apos;s Personal Website </h1>
      <nav>
        <div className={style.navlist}>
          <Link href='/'>Home</Link>
          <Link href='/portfolio'>Portfolio</Link>
          <Link href='/resume'>Resume</Link>
          <Link href='/blog'>Blogs</Link>
          <Link href='/about'>Contact Me</Link>
        </div>
      </nav>
    </header>
  );
}
