import React from "react";
import { PokeList } from "../../features/PokeList";
import "./PokeList.css";

export const PokeListPage = () => {
  return (
    <div className="pokeList-container">
      <PokeList />
    </div>
  );
};
