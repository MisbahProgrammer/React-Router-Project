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
import Quote from './Components/Quotation/Quote'
import Terms from './Components/Terms/Terms'
import Services from './Components/Services/Services'
import Disclaimer from './Components/Disclaimer/Disclaimer'

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
        path:'services',
        element: <Services/>
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
      },{
        path:'quote',
        element:<Quote/>
      },
      {
        path:'terms',
        element:<Terms/>
      },
      {
        path:'disclaimer',
        element: <Disclaimer/>
      }
    ]
  }
  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
