import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Pokemon
    </h1>
    <img
      src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//006.png"
      className="gen1"
    />
    <img
      src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//009.png"
      className="gen1"
    />
    <img
      src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//003.png"
      className="gen1"
    />
  </div>,
  document.getElementById("root")
);
