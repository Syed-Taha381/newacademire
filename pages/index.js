import Head from 'next/head'
import Explore from '../components/Home/Explore'
import Hero from '../components/Home/Hero'
import LearnAlone from '../components/Home/LearnAlone'
import Structure from '../components/Home/Structure'
import TutorialHell from '../components/Home/TutorialHell'
import Layout from '../components/layout/Layout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Learn to code for free - frontend, backend, full-stack, web3 and more | Academire</title>
        <meta name="description" content="Learn about today's job skills - frontend, backend, fullstack, mobile app development and practice online with thousands of developers. Academire is the best way to learn to code online. Start with HTML, CSS, JavaScript, SQL, Python, Data Science, and more. Learn programming like it's 2030." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <div>
        <Layout>
          <Hero />
          <TutorialHell />
          <Structure />
          <LearnAlone />
          <Explore />
        </Layout>
      </div>
    </div>
  )
}
