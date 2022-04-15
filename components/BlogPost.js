import styled from 'styled-components'

const Root = styled.div`
    cursor: pointer;
    &:hover{
        img {
            transform: scale(1.1);
            opacity: 0.6;
        }
        h2 {
            color: #67788e;
        }
    }
`
const BlogImage = styled.div`
    background-color: #111;
    width: 100%;
    overflow: hidden;
    border-radius: 10px;

    & img {
        transition: transform 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000);
        width: 100%;
        height: auto;
    }
`

const BlogLink = styled.a`
    all: unset;
`

const Heading = styled.h2`
    color: #3a3a3a;
    font-family: 'Mark Pro',Arial,sans-serif;
`

const Date = styled.p`
    margin: 5px 0px;
    padding: 0;
    font-size: 14px;
    font-weight: 400;
    color: #898aa1;
`

const BlogPost = ({post}) => {
  return (
    <Root>
        <BlogLink href={"posts/"+post.slug}>
            <BlogImage>
                <img src={post.image} />
            </BlogImage>
            <Date>{post?.date.toLongDate()}</Date>
            <Heading>{post?.title}</Heading>
        </BlogLink>
    </Root>
  )
}

export default BlogPost