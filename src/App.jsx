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
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebasa/config'
import { login, authReady } from './app/features/userSlice'
import { useDispatch } from 'react-redux'
const App = () => {
  let dispatch = useDispatch()
  let {user, isAuthReady} = useSelector((store) => store.user)
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


  onAuthStateChanged(auth, (user) => {
    dispatch(login(user))
    dispatch(authReady())
  })

  return <>
  {
    isAuthReady && <RouterProvider router={routes}/>
  }
  </>
}

export default App