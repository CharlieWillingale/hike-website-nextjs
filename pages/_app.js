import '../styles/globals.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  
  console.log('cwd: ' + process.cwd())
  console.log('dir name: ' + __dirname)
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp