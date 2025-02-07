import { BrowserRouter } from 'react-router-dom';
import Router from './Router'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <main>
          <Router />
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
