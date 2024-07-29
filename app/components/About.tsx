'use client';

import React from 'react';
import { motion } from 'framer-motion';
import '@fontsource/montserrat';

type Props = {};

function About({}: Props) {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src='/me.png'
        className='-mb-20 md:mb-0 flex-shrink-0 w-60 h-60 rounded-full object-cover md:w-50 md:h-50 xl:w-70 xl:h-70'
      />

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold text-gray-300 font-montserrat'>
          Hi, I'm{' '}
          <span className='underline decoration-[#00a082]'>David Amat</span>
        </h4>
        <p className='text-gray-400 font-montserrat'>
          I am a Data Scientist with{' '}
          <span className='aboutHighlight'>+6 years</span> of experience. I
          developed a strong background in Physics, Statistics, Math, Machine
          Learning and Programming (proficient with{' '}
          <span className='aboutHighlight'>Python</span>) as well as a
          tremendous devotion to keep embracing more knowledge. I have
          successfully finished{' '}
          <span className='aboutHighlight'>two masters</span> (Bioinformatics
          and Big Data Analytics) and constantly learning on my own (online
          courses, books and social organizations like Saturdays AI). I am
          working as Data Scientist in{' '}
          <span className='aboutHighlight'>Glovo</span>, which has given me the
          expertise of a Data Scientist inside a highly-motivated and
          fast-evolving tech company. I can cope with the responsibility of
          developing an end-to-end model, from its data exploration step,
          training and deploying it (integrating resources like{' '}
          <span className='aboutHighlight'>AWS</span>,{' '}
          <span className='aboutHighlight'>Luigi</span> pipelines,{' '}
          <span className='aboutHighlight'>Jenkins</span>,{' '}
          <span className='aboutHighlight'>Argo Workflows</span>, ... deployed
          under a <span className='aboutHighlight'>Kubernetes</span> cluster). I
          feel comfortable with AWS infraestructure (
          <span className='aboutHighlight'>Redshift</span>,{' '}
          <span className='aboutHighlight'>S3 (boto3)</span>,{' '}
          <span className='aboutHighlight'>Lambda</span>,{' '}
          <span className='aboutHighlight'>SQS</span>,{' '}
          <span className='aboutHighlight'>ParallelCluster (EC2)</span>), which
          has been the cornerstone of my second Master Thesis (see{' '}
          <a className='aboutLink' href='#projects'>
            Projects
          </a>
          ). In my free time I finished the NLP Specialization from Coursera and
          also acquired basic knowledge of{' '}
          <span className='aboutHighlight'> Dask</span>,
          <span className='aboutHighlight'> PySpark</span>,{' '}
          <span className='aboutHighlight'> Neo4j</span>,{' '}
          <span className='aboutHighlight'> Pytorch</span> and with notions of
          Deep Reinforcement Learning. Plus, I've lead end-to-end projects on
          <span className='aboutHighlight'> Recommender Systems</span> from
          ideation to production, for example building a{' '}
          <span className='aboutHighlight'> Multi-Armed Bandit</span> integrated
          with our
          <span className='aboutHighlight'> Feature Store</span>. My ambition is
          to keep learning them and be up-to-date with state-of-the-art
          algorithms and AI. In terms of soft-skills, the constant interaction
          with business stakeholders in both Banc Sabadell and Glovo has
          enhanced my communication/presentation skills, being an harmonious and
          respectful communicator, comprehensive with business needs and
          adjusting the message according to the audience when needed. As
          regards work methodology, I am systematic, organized, precise and
          detailed, but this does not compromise my timeliness.
        </p>
      </div>
    </div>
  );
}

export default About;
