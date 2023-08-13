import React from "react";
import Pokemon from "./components/Pokemon/Pokemon";
import "./components/Pokemon/pokemon.css";

export const PokeList = () => {
  return (
    <div className="list-container">
      {[1, 2, 3].map((number: any) => (
        <Pokemon
          key={number}
          pokemon={{
            name: "Bulbasaur",
            sprite:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            id: "#1",
            types: ["Grass", "Poison"],
          }}
        />
      ))}
    </div>
  );
};
