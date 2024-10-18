import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import User from './Components/User/User'
import Github from './Components/Github/Github'
import Portfolio from './Components/Portfolio/Portfolio'
import Certification from './Components/Certification/Certification'
import Privacy from './Components/Privacy/Privacy'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path: '',
        element: <Home/>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'contact',
        element:<Contact/>
      },
      {
        path:'user/:userid',
        element: <User/>
      },
      {
        path:'github',
        element:<Github/>
      },
      {
        path:'portfolio',
        element:<Portfolio/>
      },
      {
        path:'certification',
        element:<Certification/>
      },
      {
        path:'privacy',
        element:<Privacy/>
      }
    ]
  }
  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
