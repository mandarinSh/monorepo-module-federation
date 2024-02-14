import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from '@/components/App/App';
import shopRoutes from 'shop/Router';
import adminRoutes from 'admin/Router';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      ...shopRoutes,
      ...adminRoutes,
    ]
  },
]);
