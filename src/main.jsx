import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import HomePage from './layouts/HomePage.jsx'
import CoursesPage from './layouts/CoursesPage.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//     children: [
//       {
//         path: "",
//         element: <HomePage></HomePage>
//       },
//       {
//         path: "/courses",
//         element: <CoursesPage></CoursesPage>
//       }
//     ]
//   }
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<HomePage></HomePage>}></Route>
        <Route path="/courses" element={<CoursesPage></CoursesPage>}></Route>
      </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
