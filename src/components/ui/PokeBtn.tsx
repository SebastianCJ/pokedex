import React from "react";

type BtnProps = {
  name: string;
  onClick: () => void;
};

const PokeBtn = ({ name, onClick }: BtnProps) => {
  return (
    <button type="button" onClick={onClick}>
      {name}
    </button>
  );
};

export default PokeBtn;
