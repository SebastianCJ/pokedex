import React from "react";
import "./pokemon.css";
import TypeCard from "./TypeCard";

type PokemonProps = {
  pokemon: {
    name: string;
    sprite: string;
    id: string | number;
    types: Array<string>;
  };
};

const Pokemon = ({ pokemon }: PokemonProps) => {
  return (
    <div className="pokemon-card">
      <div className="sprite-card">
        <img src={pokemon.sprite} alt="Pokemon Sprite"></img>
      </div>
      <span className="pokemon-id">{pokemon.id}</span>
      <span className="pokemon-name">{pokemon.name}</span>
      <div className="types-container">
        {pokemon?.types.map((type: string) => (
          <TypeCard key={type} type={type} />
        ))}
      </div>
    </div>
  );
};

export default Pokemon;
