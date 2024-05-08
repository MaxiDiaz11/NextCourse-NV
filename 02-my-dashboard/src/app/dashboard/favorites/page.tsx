import { PokemonGrid } from "@/pokemons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favoritos",
  description: "Listado de favoritos",
  keywords: "pokemons, favoritos, global state",
};

const PokemonPage = async () => {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokemons - favoritos{" "}
        <small className="text-blue-500">Global State</small>
      </span>
      <PokemonGrid pokemons={[]} />
    </div>
  );
};

export default PokemonPage;
