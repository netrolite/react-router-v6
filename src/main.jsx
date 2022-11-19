import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Hello, world!</h1>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)