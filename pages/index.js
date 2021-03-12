import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <div className="min-h-screen py-0 px-2 flex flex-col justify-center items-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout title="Home">
        <p className="text-4xl">Welcome to Nextjs</p>
      </Layout>

    </div>
  )
}
