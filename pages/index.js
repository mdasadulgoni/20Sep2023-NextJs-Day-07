// 1. Import Area
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TITLE from '../helpers/contanst01';
import { DESCRIPTION } from '../helpers/constant02';
import Main from './Main';



//2. Defination Area
 function Home() {
  return (
    <>
      <Head>
        <title> {TITLE} </title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="icon"  href="/favicon.ico" />
      </Head>
          <Main/>
      </>
  )
}
// 3. Export Area
export default Home ;
