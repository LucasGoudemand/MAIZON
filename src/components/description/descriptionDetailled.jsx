import React from "react";
import "../description/css/style.css";
import DetailsBlock from "../details/details.jsx";

function UperDescription(props) {
  const appartement = props.logements; //Utilisation du props

  return (
    <div className="containerDescription">
      <div className="containerDetailledLeft">
        <DetailsBlock
          className="detailsBlockClassName"
          Title="Description"
          Text={appartement.description}
        />
      </div>
      <div className="containerDetailledRight">
        <DetailsBlock
          className="detailsBlockClassName"
          Title="Equipements"
          Text={appartement.equipments}
        />
      </div>
    </div>
  );
}

export default UperDescription;
