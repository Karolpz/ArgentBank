import { BrowserRouter } from 'react-router-dom';
import Router from './Router'
import Footer from './containers/Footer/Footer';
import Menu from './containers/Menu/Menu';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from './redux/slices/getUserSlice';

const App = () => {

  const dispatch = useDispatch()
  const token = localStorage.getItem("token")

  useEffect(() => {
    if (token) {
      dispatch(getUser(token));
    }
  });

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
