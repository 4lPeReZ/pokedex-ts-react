import { useContext } from "react";
import { PokeballIconSmall } from "../../Assets/pokeball";
import { PokemonList } from "../../Components/PokemonList";
import styles from "./styles.module.scss";
import { PokemonContext } from "../../Context/pokemonContext";
import { Pagination } from "../../Components/Pagination";
import { usePagination } from "../../Hooks/usePagination";


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