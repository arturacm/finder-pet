import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './routes/Home.tsx';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './routes/ErrorPage.tsx';
import About from './routes/About/index.tsx';
import routes from './routes/routes.ts';

import { Provider } from 'react-redux';
import store from './redux/store.ts';
import SignUp from './routes/SignUp/index.tsx';
import Login from './routes/Login/index.tsx';

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: routes.about,
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: routes.signUp,
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
  {
    path: routes.login,
    element: <Login />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
