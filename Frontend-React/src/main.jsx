import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import rootReducer from './reducers'
import {getUsers} from './actions/usersAction.js'

import './style.scss'

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
})

store.dispatch(getUsers())

createRoot(document.getElementById('root')).render(

<Provider store={store}>
  <StrictMode>
    <App />
  </StrictMode>,
</Provider>
)

