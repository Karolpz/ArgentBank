import { BrowserRouter } from 'react-router-dom';
import Router from './Router'
import { Footer } from './containers/Footer/Footer';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <main>
          <Router />
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
