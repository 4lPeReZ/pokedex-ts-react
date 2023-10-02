import { useContext } from "react";
import { PokeballIconSmall } from "../../Assets/pokeball";
import { Filters } from "../../Components/Filters";
import { Pagination } from "../../Components/Pagination";
import { PokemonList } from "../../Components/PokemonList";
import { PokemonContext } from "../../Context/pokemonContext";
import { usePagination } from "../../Hooks/usePagination";

import styles from "./styles.module.scss";

export const Home = () => {
  const { pokemonsFiltered } = useContext(PokemonContext);
  const { page, nextPage, previousPage, backToHome } = usePagination();

  let perPage = 12;

  return (
    <div className={styles.home}>
      <header>
        <div onClick={backToHome}>
          <PokeballIconSmall />
          <span>Pokédex</span>
        </div>
      </header>
      <Filters />
      <PokemonList
        page={page}
        perPage={perPage}
        pokemonsUrls={pokemonsFiltered}
      />
      <Pagination
        page={page}
        perPage={perPage}
        nextPage={nextPage}
        previousPage={previousPage}
        maxItems={pokemonsFiltered?.length!}
      />
    </div>
  );
};