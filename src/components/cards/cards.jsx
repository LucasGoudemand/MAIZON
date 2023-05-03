import styled from "styled-components";
import { Link } from "react-router-dom";
import "../cards/cards.css";

const StyledLink = styled(Link)``;

function Card({ appartement }) {
  return (
    <StyledLink className="linkCard" to={`/fichelogement/${appartement.id}`}>
      <div className="containerForOneCard">
        <img
          className="accomodationPicture"
          alt="illustration de la location"
          src={appartement.cover}
        ></img>
        <div className="accomodationTitle">
          <p>{appartement.title}</p>
        </div>
      </div>
    </StyledLink>
  );
}

function Cards(props) {
  const logements = props.logements;
  return (
    <div className="containerOfAllCards">
      {logements.map((appartement, id) => (
        <Card key={id} appartement={appartement} />
      ))}
    </div>
  );
}

export default Cards;
