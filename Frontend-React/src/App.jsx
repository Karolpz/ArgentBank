import { BrowserRouter } from 'react-router-dom';
import Router from './Router'
import { Footer } from './containers/Footer/Footer';

const App = () => {

  return (
    <>
      <BrowserRouter>
         <Router />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
