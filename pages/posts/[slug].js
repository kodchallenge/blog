import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import styled from 'styled-components'

const Root = styled.div`
  & * {
    color: #2b2a29;
    font-family: 'Mark Pro',Arial,sans-serif;
  }
`

const Container = styled.div`
  width: 60%;
  margin: auto;
  @media (max-width: 1368px) {
    width: 80%;
  }
  @media (max-width: 968px) {
      width: 90%;
  }
`

const Heading = styled.h1`
  font-weight: 700;
  font-size: 60px;
`

const BlogDate = styled.div`
  font-weight: 700;
  margin-top: 50px;
`
const Tag = styled.span`
  color: white;
  background-color: red;
  border-radius: 5px;
  font-weight: 700;
  padding: 5px 10px;
`

const BlogImage = styled.div`
  img {
    width: 100%;
    height: 100%;
    margin: auto;
  }
`

const BlogText = styled.div`
  font-size: 1.375rem;
  line-height: 1.636;
  margin: 40px 0px;
`

const BlogHeader = styled.div`
  text-align: center;
  margin: 100px 0px;
`

function BlogPostPage({ post }) {
  return (
    <Root>
      <Container>
        <BlogHeader>
          <Tag>Geliştirme Günlüğü</Tag>
          <Heading>{post?.title}</Heading>
          <BlogDate>{post?.date.toLongDate()}</BlogDate>
        </BlogHeader>
        <BlogImage>
          <img src={post?.image} />
        </BlogImage>
        <BlogText>
          <ReactMarkdown
            children={post?.description}
            rehypePlugins={[rehypeRaw]}
          />
        </BlogText>
      </Container>
    </Root >
  )
}

BlogPostPage.getInitialProps = async ({ req, query, res }) => {
  const hostname = req.headers.host
  const resData = await fetch(`${hostname}/api/posts/${query.slug}`)
  const result = await resData.json()

  if (result.success && result.data) {
    return { post: result.data }
  }
  res.redirect("/")
  return {post: null}
}

export default BlogPostPage