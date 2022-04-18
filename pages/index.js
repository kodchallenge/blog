import Head from 'next/head'
import BlogList from '../components/BlogList'

const Home = ({posts}) => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  	  <BlogList posts={posts}/>
    </div>
  )
}

Home.getInitialProps = async ({req, query}) => {
  const hostname = req.headers.host
  const resData = await fetch(`${hostname}/api/posts`)
  const result = await resData.json()

  if(result.success) {
    return {posts: result.data}
  }
  
  return {posts: null}
}

export default Home