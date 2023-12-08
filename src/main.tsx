import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import { BrowserRouter, RouterProvider, createBrowserRouter} from 'react-router-dom'
import AppContextProvider from './components/context/appContext.tsx'
import Home from './components/pages/Home.tsx'
import React from 'react'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </BrowserRouter>


  </React.StrictMode>,
)