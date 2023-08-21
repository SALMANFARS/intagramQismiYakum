import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './pages/Login/Login'
import Layout from './pages/Layout/Layout'
import Home from './pages/Home/Home'
import User from './User/User'
import Register from './pages/Register/Register'
import Message from './pages/Message/Message'
import Explore from './pages/Explore/Explore'

function App() {

  const router = createBrowserRouter([
    // Login
    {
      path: "/",
      element: <Login />,
    },
    // Registration
    {
      path: "/register",
      element: <Register />,
    },
    // HOME
    {
      path: "home",
      element: <Layout />,
      children: [
        // Home
        {
          index: true,
          element: <Home />,
        },
        // User
        {
          path: "user",
          element: <User />,
        },

        {
          path: "message",
          element: <Message />,
        },
        {
          path: "explore",
          element: <Explore />,
        },
      ],
    },
  ]);

  return (
    <div className="wrapper">
      <RouterProvider router={router} />
    </div>
  );
}

export default App
