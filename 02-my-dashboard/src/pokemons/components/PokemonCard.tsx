import Link from "next/link";
import Image from "next/image";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import { IoHeartOutline } from "react-icons/io5";

interface Props {
  simplePokemon: SimplePokemon;
}

export const PokemonCard = ({ simplePokemon }: Props) => {
  const { id, name } = simplePokemon;

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg flex flex-col">
        <div className="text-center p-6 bg-gray-800 border-b flex flex-col items-center justify-center">
          <Image
            alt={name}
            height={100}
            key={id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            width={100}
            priority={false}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {name}
          </p>
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemons/${name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Más información
            </Link>
          </div>
        </div>
        <div className="border-b">
          <Link
            href="/dashboard/main"
            className="px-4 py-2 hover:bg-gray-100 flex items-center"
          >
            <div className="text-red-600">
              <IoHeartOutline />
            </div>

            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                No es favorito
              </p>
              <p className="text-xs text-gray-500">Agregar a favoritos</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
