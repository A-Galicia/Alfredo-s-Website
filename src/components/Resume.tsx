import React from 'react';
import style from './Resume.module.css';

export default function Resume() {
  return (
    <div>
      <div className={style.head}>
        <h1 className={style.pageTitle}>Resume</h1>
        <p>
          <strong>
            <a href='Alfredo_Galicia_Resume.docx' download>
              {' '}
              Download Resume
            </a>
          </strong>
        </p>
      </div>

      <main className={style.resume}>
        <div className={style.entry}>
          <h2>Education</h2>
          <h3 className={style.entryTitle}>Moorpark Community College</h3>
          <p className={style.entryInfo}>
            Associate of Science in Computer Science for Transfer
          </p>
          <h3 className={style.entryTitle}>
            California Polytechnic State University, San Luis Obispo
          </h3>
          <p className={style.entryInfo}>
            Bachelor of Science in Computer Science
          </p>
        </div>

        <hr />

        <div className={style.entry}>
          <h2>Experience</h2>
          <h3 className={style.entryTitle}>USMC</h3>
          <p className={style.entryInfo}>Technical Engineer</p>
          <p className={style.entryDescription}>
            Managed and maintained over $250,000 of government assets, ensuring
            operational readiness and efficiency. Created training plans and
            standard operating procedures for the technical engineering section,
            enhancing team performance and compliance. Managed the continual
            training and equipment readiness for the section, improving
            operational capabilities and mission success.
          </p>
        </div>

        <hr />

        <div className={style.entry}>
          <h2>Projects</h2>
          <h3 className={style.entryTitle}>Asteroids (2D Shooter Game)</h3>
          <p className={style.entryInfo}>
            Built a real-time 2D Asteroids clone with a stable, time-step-driven
            game look and input/event handling for smooth physics and rendering
            with C++ and the SFML library. Created interactive game logic with
            screen wrapping, random generation, and inertial physics. Integrated
            CMake for cross-platform development.
          </p>
          <h3 className={style.entryTitle}>Strength Projector</h3>
          <p className={style.entryInfo}>
            Applied React to implement a frontend application with interactive
            charts and a responsive design. Used Express.js to develop a backend
            RESTful API for CRUD operations to manipulate user data and store it
            in a PostgreSQL database. Authenticates and verifies users using
            JWTs and keeps the user logged in for a given amount of time.
            Implemented data analysis to project progress 50 days in the future,
            utilizing the user’s workout history.
          </p>
        </div>

        <hr />

        <div className={style.entry}>
          <h2>Coursework</h2>
          <ul className={style.skillList}>
            <li>Object-Oriented Programming in C++</li>
            <li>Data Structures and Algorithims</li>
            <li>Computer Architecture</li>
            <li>Discrete Mathematics</li>
            <li>Linear & Differential Mathematics</li>
            <li>Modern Physics</li>
          </ul>
        </div>

        <hr />

        <div className={style.entry}>
          <h2>Skills</h2>
          <ul className={style.skillList}>
            <li>C++, Javascript, HTML/CSS</li>
            <li>Unix</li>
            <li>Leadership</li>
            <li>Teamwork</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
