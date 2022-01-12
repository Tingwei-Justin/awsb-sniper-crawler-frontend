import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>aWSB Snipper Crawler</title>
        <meta name="description" content="aWSB Snipper Crawler Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-lg font-bold">
          Welcome to aWSB Snipper Crawler
        </h1>
      </main>
    </div>
  )
}

export default Home
