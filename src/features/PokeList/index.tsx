import React from "react";
import Pokemon from "./components/Pokemon/Pokemon";
import "./components/Pokemon/pokemon.css";

const dummyMapArray = [1, 2, 3];
const POKEMON_NAME = "Bulbasaur";
const POKEMON_TYPES = ["Grass", "Poison"];

export const PokeList = () => {
  return (
    <div className="list-container">
      {dummyMapArray.map((number: any) => (
        <Pokemon
          key={number}
          pokemon={{
            name: POKEMON_NAME,
            sprite:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            id: "#1",
            types: POKEMON_TYPES,
          }}
        />
      ))}
    </div>
  );
};
