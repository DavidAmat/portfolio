'use client';

import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import '@fontsource/montserrat';
import '@fontsource-variable/raleway';
import Link from 'next/link';

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      'Data Scientist',
      'A.I. Scientist',
      'ML Engineer',
      'Full Stack Data',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img
        src='/exalted-hydra-logo.png'
        alt='Personal Logo'
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
      />
      <div className='z-20'>
        <h2 className='text-1xl uppercase pb-2 text-gray-500 tracking-[10px] font-extrabold font-raleway'>
          David Amat
        </h2>
        <h1 className='text-1xl lg:text-6xl font-semibold scroll-px-10'>
          <span>{text}</span>
          <Cursor cursorColor='#00a082' />
        </h1>

        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
