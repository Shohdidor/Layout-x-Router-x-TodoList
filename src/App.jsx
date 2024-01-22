import './App.css'
import Layout from './Layout/Layout'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import NotFound from './pages/NotFound/NotFound'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'


function App ()  {
  const router = createBrowserRouter ( [ 
    {
      path : "/",
      element : <Layout />,
      children : [
        {
          index : true ,
          element : <Home />
        },
        {
          path : "about" ,
          element : <About />
        },
        {
          path : "contact"  ,
          element : <Contact />
        },
        {
          path : "*",
          element : <NotFound />
        }
      ]
    },
  ])


  return (
    <>
        <RouterProvider router={router} />    
    </>
  )
}

export default App
