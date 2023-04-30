import Head from 'next/head'
import { Footer } from './components/Footer'
import Navbar from './components/Navbar'
import Contact from './Contact'
import SignIn from './SignIn'

export default function Home() {
  return (
    <div
    className='w-full h-screen flex flex-col 
    absolute top-0 left-0
    '
    >
      <Head>
        <title>Restaurant</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        {/* <SignIn /> */}
        <Contact />
        <Footer/>
      </main>
    </div>
  )
}
