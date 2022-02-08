import '../styles/globals.css'
// Just add .
import { Layout } from '../components/Layout'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      < Component {...pageProps } />
    </Layout>
  )
}
export default MyApp
