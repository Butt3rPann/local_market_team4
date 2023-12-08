import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import AppContextProvider from './components/context/appContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)