import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, PokeDetail } from "./Pages";
import "./index.scss";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/:pokeId',
    element: <PokeDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
);
