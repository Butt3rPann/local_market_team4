import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import { BrowserRouter, RouterProvider, createBrowserRouter} from 'react-router-dom'
import AppContextProvider from './components/context/appContext.tsx'
import Home from './components/pages/Home.tsx'
import React from 'react'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//   },
// ])

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <AppContextProvider>
  //     <RouterProvider router={router} />,
  // </AppContextProvider>

  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </BrowserRouter>


  </React.StrictMode>,
)

