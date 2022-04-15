import Layout from '../components/Layout'
import '../index.css'
import '../utils/extends'

const MyApp = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}


export default MyApp