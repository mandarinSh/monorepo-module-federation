import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { App } from '@/components/App/App';
import { Shop } from '@/pages/shop';

const routes = [
  {
    path: "/shop",
    element: <App />,
    children: [
      {
        path: '/shop/main',
        element: <Suspense fallback={'...loading'} > <Shop /></Suspense >
      },
      {
        path: '/shop/second',
        element: <Suspense fallback={'...loading'} > <div style={{color: 'red'}}>sfdfs</div></Suspense >
      }
    ]
  },
];

export const router = createBrowserRouter(routes);

export default routes;
