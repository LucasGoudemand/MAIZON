import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../description/css/style.css";

const HostPicture = styled.img`
  border-radius: 70px 70px 70px 70px;
  width: 64px;
`;
function UperDescription(props) {
  const appartement = props.logements;
  const rating = appartement.rating; // récupérer le rating du logement

  const fullStars = Array(5).fill(
    //création de nos tableau contenant nos étoiles. Nous les remplissonts avec FILL
    <FontAwesomeIcon
      icon={faStar}
      alt="Etoile Pleine"
      className="fullStar starsRating"
    />
  );
  const emptyStars = Array(5).fill(
    <FontAwesomeIcon
      icon={faStar}
      alt="Etoile Vide"
      className="emptyStar starsRating"
    />
  );

  return (
    <div className="containerInfo">
      <div className="containerLeft">
        <h2>{appartement.title}</h2>
        <p>{appartement.location}</p>
        <div className="TagsContainer">
          {appartement.tags.map(
            (
              tag //On affiche chaque Tags grace à l'option map
            ) => (
              <p className="containerLeftTags" key={tag}>
                {tag}
              </p>
            )
          )}
        </div>
      </div>
      <div className="containerRight">
        <p className="hostName">
          {appartement.host.name.split(" ")[0]}
          <br />
          {appartement.host.name.split(" ")[1]}

          <HostPicture src={appartement.host.picture} />
        </p>
        <div className="ratingStars">
          {fullStars.slice(0, rating).map((fullStar, index) => {
            //On récupére le nombre d'étoile qui correspond au rating en partant de 0
            return <p key={index}>{fullStar}</p>;
          })}
          {emptyStars.slice(rating).map((emptyStar, index) => {
            //On récupére le nombre d'étoile à partir de rating (si rating =2 alors on récupere 3)
            return <p key={index}>{emptyStar}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default UperDescription;
