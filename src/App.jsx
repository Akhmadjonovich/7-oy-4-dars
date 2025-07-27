import React from 'react'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Profile from './pages/Profile'
import SingleImage from './pages/SingleImage'
import Login from './pages/Login'
import SignUp from './pages/SingUp'
import { useSelector } from 'react-redux'
import ProtectedRoutes from './components/ProtectedRoutes'

const App = () => {
  let {user} = useSelector((store) => store.user)
  let routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout/>
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: "/profile",
          element: <Profile/>
        },
        {
          path: 'singleImage/:id',
          element: <SingleImage/>
        }
      ]
    },
    {
      path: '/login',
      element:user ? <Navigate to="/"/> : <Login/>
    },
    {
      path: '/signup',
      element:user ? <Navigate to="/"/> : <SignUp/>
    }
  ])
  return <RouterProvider router={routes}/>
}

export default App