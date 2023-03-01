import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>twitter 2.0</title>
      </Head>

      <main>
        <Sidebar />

        <Feed />
        {/* Widgets */}
      </main>
    </div>
  )
}

export default Home
