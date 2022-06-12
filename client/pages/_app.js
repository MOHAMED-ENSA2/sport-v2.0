import { Provider } from 'react-redux'

import store from "../store/configureStore" 

import Container from '../components/Container'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store = {store}>
      <Container>
        <Navbar/>
        <Component {...pageProps} />
        <Footer/>
      </Container> 
    </Provider>
  )
}

export default MyApp
