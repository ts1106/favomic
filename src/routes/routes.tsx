import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import DefaultLayout from '../layouts/DefaultLayout';

export default function Router() {
  return createBrowserRouter([
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        {
          path: '/',
          element: <App />,
        },
      ],
    },
  ]);
}
