import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './routes/Home.tsx';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './routes/ErrorPage.tsx';
import routes from './routes/routes.ts';

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Home />,
    errorElement: <ErrorPage/>
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
