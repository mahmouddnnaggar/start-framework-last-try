import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Layout from './Components/Layout/Layout';
import Home from './pages/Home/Home';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/portfolio', element: <Portfolio /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
