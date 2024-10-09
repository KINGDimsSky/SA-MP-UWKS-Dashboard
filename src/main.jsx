import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './pages/Landing'
import LoginForm from './pages/signin'
import SignUpForm from './pages/signup'
import NotFound from './pages/404'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
    errorElement: <NotFound/>
  },
  {
    path: "/signin",
    element: <LoginForm/>
  },
  {
    path: "/signup",
    element: <SignUpForm/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
