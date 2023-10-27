import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/root';
import Works from './routes/Works';
import Body from './routes/Body';
import ErrorPage from './error-page';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,

      },
      {
        path: "works",
        element: <Works />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
