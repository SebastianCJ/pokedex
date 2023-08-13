import React from "react";
import "./pokemon.css";
import ColorTypes from "../../../../utils/ColorTypes";

type TypeCardProps = {
  type: string;
};

const TypeCard = ({ type }: TypeCardProps) => {
  return (
    <div
      aria-label="type-container"
      className="typecard-card"
      style={{
        color: "black",
        backgroundColor: ColorTypes[type.toLowerCase()],
      }}
    >
      <span>{type}</span>
    </div>
  );
};

export default TypeCard;
