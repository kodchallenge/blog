import styled from 'styled-components'
import BlogPost from './BlogPost'

const Root = styled.div`
    width: 60%;
    margin: auto;
    @media (max-width: 1368px) {
        width: 80%;
    }
    @media (max-width: 968px) {
        width: 90%;
    }
`

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    & > * {
        flex: 40%;
        padding: 30px;   
        @media (max-width: 768px) {
            flex: 100%;
        }
    }
`

const BlogList = ({posts}) => {
    return (
        <Root>
            <Row>
                {posts?.map(post => (
                    <BlogPost post={post} />
                ))}
            </Row>
        </Root>
    )
}

export default BlogList