import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

import Header from '../components/header';
import Footer from '../components/footer';

export default function About(){
  let title = 'Aboutページ'
  return(
    <>
    <Head><title>{ title }</title></Head>
    <Header title={ title } />
      <h1 className="bg-red-500 text-9xl text-white">{ title }</h1>
      <div>
        <Link href={'/'}><a>home</a></Link>
      </div>
      <div>
        <Image src={`/img/test01.JPG`} width={720} height={540} />
      </div>
      <Footer title="Aboutフッタータイトル" />
    </>
  )
}