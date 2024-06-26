import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login, //doesn't use <Error/>
  Orders,
  Products,
  SingleProduct,
  Register, //doesn't use <Error/>
} from './pages';

import { ErrorElement } from './components';

//loaders
import { loader as LandingLoader } from './pages/Landing';
import { loader as SingleProductLoader } from './pages/SingleProduct';
import { loader as ProductsLoader } from './pages/Products';
import { loader as CheckoutLoader } from './pages/Checkout';
import { loader as OrdersLoader } from './pages/Orders';

//actions
import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { action as checkoutAction } from './components/CheckoutForm';
import { store } from './store';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: LandingLoader,
      },
      { path: 'products', element: <Products />, loader: ProductsLoader },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        loader: SingleProductLoader,
      },
      { path: 'cart', element: <Cart /> },
      {
        path: 'checkout',
        element: <Checkout />,
        loader: CheckoutLoader(store),
        action: checkoutAction(store),
      },
      { path: 'orders', element: <Orders />, loader: OrdersLoader(store) },
      { path: 'about', element: <About /> },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
    //here we don't have elements from HomeLayout!
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
