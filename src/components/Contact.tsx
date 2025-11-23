'use client';
import { useRef, useState } from 'react';
import style from './Contact.module.css';
import Image from 'next/image';
import emailjs, { send } from '@emailjs/browser';

const SERVICE_ID = 'personalWebsite';
const TEMPLATE_ID = 'template_bo8j33p';
const PUBLIC_KEY = 'GaLWOX77XxeLiC-oT';

export default function Contact() {
  const form = useRef({} as HTMLFormElement);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSent(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setError(error.text);
        }
      )
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <div>
      <h1 className={style.pageTitle}>Contact</h1>

      <div className={style.aboutContact}>
        <Image
          src='/Gmail.png'
          alt='Gmail logo'
          width={500}
          height={500}
          className={style.aboutImg}
        />

        <p className={style.aboutGmail}>alfgalic@gmail.com</p>

        {!sending ? null : <p className={style.loading}>Sending...</p>}
        {error ? <p className={style.error}>Error: {error}</p> : null}

        {sent ? (
          <p className={style.success}>Successfully sent message!</p>
        ) : (
          <form className={style.form} ref={form} onSubmit={sendEmail}>
            <label className={style.label}>Name</label>
            <input className={style.input} type='text' name='name' required />
            <label className={style.label}>Email</label>
            <input className={style.input} type='email' name='email' required />
            <label className={style.label}>Message</label>
            <textarea className={style.input} name='message' />
            <input
              className={style.submit}
              type='submit'
              value='Send'
              required
            />
          </form>
        )}

        <a
          href='https://www.linkedin.com/in/alfredo-galicia2/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            src='/LinkedIn.png'
            alt='LinkedIn logo'
            width={500}
            height={500}
            className={style.aboutImg}
          />
        </a>

        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/A-Galicia'
        >
          <Image
            src='/GitHub.png'
            alt='GitHub logo'
            width={500}
            height={500}
            className={style.aboutImg}
          />
        </a>
      </div>
    </div>
  );
}
