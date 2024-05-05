import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { Home } from '@/pages/Home.tsx';
import CardDemo from '@/components/CardDemo.tsx';
import Dashboard from '@/pages/Dashboard.tsx';
import CarbonList from '@/pages/CarbonList.tsx';
import ErrorPage from '@/pages/ErrorPage.tsx';

/**
 * https://reactrouter.com/en/main/start/overview
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'carbon-list',
        element: <CarbonList />,
      },
      // {
      //   path: 'carbon-list/:id',
      //   element: <CarbonList />,
      // },
    ],
  },
  {
    path: '/login',
    element: <CardDemo />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
