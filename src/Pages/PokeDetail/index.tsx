import { useParams } from "react-router-dom";
import { PokemonDetail } from "../../Components/PokemonDetail";
import { usePokemon } from "../../Hooks/usePokemon";

export const PokeDetail = () => {
  const { pokeId } = useParams();
  const { pokemon } = usePokemon("", pokeId);

  return <PokemonDetail pokemon={pokemon!} />;
};