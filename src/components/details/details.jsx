import React from "react";

import Arrow from "../img/ButtonSliderLeft.png";
import "../details/details.css";

function DetailsBlock(props) {
  let content;

  if (typeof props.Text === "string") {
    // Si la prop est une chaîne de caractères, créez une balise <p>
    content = <p className="titlePropsText">{props.Text}</p>;
  } else if (Array.isArray(props.Text)) {
    // Si la prop est un tableau, créez une balise <ul> et plusieurs balises <li>

    content = (
      <ul className="listPropsText">
        {props.Text.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    );
  }
  return (
    <div className="containerDetails">
      <details className="details">
        <summary>
          {props.Title}
          <img className="arrow" alt="arrow" src={Arrow} />
        </summary>

        {content}
      </details>
    </div>
  );
}

export default DetailsBlock;
