import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/Orders';
import RootLayout from './pages/Root';
import Verify from './pages/Verify';
import ErrorElement from './components/Error/ErrorElement';
import Profile from './pages/Profile.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,

    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'product/:productId',
        element: <Product />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'place-order',
        element: <PlaceOrder />,
      },
      {
        path: 'my-orders',
        element: <Orders />,
      },
      {
        path: 'verify',
        element: <Verify />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
