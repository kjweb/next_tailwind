import Head from 'next/head';
import Link from 'next/link';
import useSWR from 'swr';
import Image from 'next/image';

import Header from './components/header';
import Footer from './components/footer';

// export default function Home (){
//   return (
//     <>
//     <h1>ともすた</h1>
//     </>
//   )
// }

// export default function Home() {
//   let title = "ともすたトップページ"
//   const fetcher = () => fetch('/api/message')
//   const {data, error} = useSWR('/api/message', fetcher)
//   if (error) return <div>failed to load</div>
//   if (!data) return <div>loading...</div>

//   return (
//     <>
//     <Head>
//       <title>{ title }</title>
//     </Head>
//     <Header title={ title } />
//       <p>{data.message}！</p>
//       <div>
//         <Link href={`about`}><a>About</a></Link>
//       </div>
//       <Footer　title={ `Homeフッター` }/>
//     </>
//   );
// }
const Home =()=>{
  const title = "Nextjsテスト"
  return(
    <>
    <Head>
      <title>{ title }</title>
    </Head>
    <Header title={ title }/>
    <h1>テスト</h1>
    <div>
      <Image src={ `/img/test01.jpg` } width={720} height={540} />
    </div>
    <Link href={'/about'}><a>Aboutページへ</a></Link>
    <Footer title={ title } />
    </>
  )
}
export default Home