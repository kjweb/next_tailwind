const Blog = (props) => {
  console.log(props)
  return(
    <>
    <h1>ブログ　記事一覧</h1>
    </>
  )
}

export default Blog

export async function getStaticProps(){
  const testText = "Next.js ポートフォリオサイト"
  return {
    props: {
      test: testText,
    },
  }
}
