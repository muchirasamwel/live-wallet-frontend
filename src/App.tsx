import React from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Accounts from './pages/Accounts'
import Transactions from './pages/Transactions'
import Root from './routes'
import ErrorPage from './ErrorPage'
import { useGetAccounts } from './hooks/loaderFns'

function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      loader: useGetAccounts,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/accounts',
          element: <Home />
        },
        {
          path: '/account/:id',
          element: <Accounts />
          // loader: useGetAccounts
        }
      ]
    },
    {
      path: '/dashboard',
      element: <Dashboard />
    },
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/transactions',
      element: <Transactions />
    }
  ])
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
