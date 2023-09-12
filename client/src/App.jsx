import './App.scss'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Gig from './pages/gig/Gig'
import Gigs from './pages/gigs/Gigs'
import Add from './pages/add/Add'
import Orders from './pages/orders/Orders'
import Messages from './pages/messages/Messages'
import Message from './pages/message/Message'
import MyGigs from './pages/myGigs/MyGigs'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Pay from './pages/pay/Pay'
import Success from './pages/success/Success'
import { useEffect } from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from 'react-router-dom'

// Scroll to top Component
const ScrollToTop = () => {
  const location = useLocation()

  useEffect(() => {
    // Scroll to the top when the route changes
    window.scrollTo(0, 0)
  }, [location.pathname]) // Trigger the effect when the pathname changes

  return null // This component doesn't render anything
}

const queryClient = new QueryClient()

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
          <ScrollToTop /> {/* Render ScrollToTop component */}
          <Navbar />
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/gigs',
          element: <Gigs />,
        },
        {
          path: '/gig/:gigId',
          element: <Gig />,
        },
        {
          path: '/Orders',
          element: <Orders />,
        },
        {
          path: '/mygigs',
          element: <MyGigs />,
        },
        {
          path: '/add',
          element: <Add />,
        },
        {
          path: '/messages',
          element: <Messages />,
        },
        {
          path: '/message/:id',
          element: <Message />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/register',
          element: <Register />,
        },
        {
          path: '/pay/:id',
          element: <Pay />,
        },
        {
          path: '/success',
          element: <Success />,
        },
      ],
    },
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
