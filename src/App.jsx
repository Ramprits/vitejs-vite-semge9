import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
]);

export default function App() {
  console.log('hi', import.meta.env.VITE_SOME_KEY);
  return <RouterProvider router={router}></RouterProvider>;
}
