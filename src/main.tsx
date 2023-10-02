import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, PokeDetail } from "./Pages";
import "./index.scss";
import PokemonProvider from './Context/pokemonContext';


const router = createBrowserRouter([
  {
    path: '/{pokedex-ts-react}',
    element: <Home />,
  },
  {
    path: '/:pokeId',
    element: <PokeDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <PokemonProvider>
    <RouterProvider router={router} />
  </PokemonProvider>
);
