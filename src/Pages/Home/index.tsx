import { useContext } from "react";
import { PokeballIconSmall } from "../../Assets/pokeball";
import { PokemonList } from "../../Components/PokemonList";
import styles from "./styles.module.scss";
import { PokemonContext } from "../../Context/pokemonContext";

export const Home = () => {
  const { pokemonsFiltered } = useContext(PokemonContext);

  return (
    <div className={styles.home}>
        <header>
            <div>
                <PokeballIconSmall />
                <span>Pokedex</span>
            </div>
        </header>
        <PokemonList pokemonsUrls={pokemonsFiltered} />
    </div>
  );
};