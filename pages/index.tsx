import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Connector App</title>
        <meta name='description' content='Stay connected with your people.' />
        <link rel='icon' href='#' />
      </Head>

      <main className='text-3xl underline'>Hello, world!</main>

      <footer></footer>
    </div>
  )
}
