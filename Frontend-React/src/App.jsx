import { BrowserRouter } from 'react-router-dom';
import Router from './Router'
import { Footer } from './containers/Footer/Footer';
import Menu from './containers/Menu/Menu';

const App = () => {

  return (
    <>
      <BrowserRouter>
      <Menu />
        <Router />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
