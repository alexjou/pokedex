import React from "react";
import pokeball from '../assets/pokeboll.gif'

export const PokeballMini = () => {
  return (
    <img
      src={pokeball}
      alt="Loading"
      style={{
        width: "12rem",
        margin: "auto",
        display: "block",
      }}
      loading="lazy"
    />
  );
};
