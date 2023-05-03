import React from "react";
import Header from "../components/header/header.jsx";
import Footer from "../components/footer/footer.jsx";
import Banner from "../components/banner/topbanner.jsx";
import background from "../components/img/BannerBackgroundAPropos.png";
import DetailsBlock from "../components/details/details.jsx";
import styled from "styled-components";

import { Helmet, HelmetProvider } from "react-helmet-async";

const DetailsContainer = styled.div`
display;flex;
flex-direction:column;
margin-left:80px;
margin-right:80px;
margin-top:50px;
@media (min-width: 375px) and (max-width: 767px) {
  margin-left:0px;
margin-right:0px;
}
`;

function Apropos() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>A propos</title>
        </Helmet>
        <div className="ContainerMain">
          <Header />
          <Banner backgroundImage={background} Title="A Propos" />
          <DetailsContainer>
            <DetailsBlock
              Title="Fiabilité"
              Text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
            />
            <DetailsBlock
              Title="Respect"
              Text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            />
            <DetailsBlock
              Title="Service"
              Text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
            />
            <DetailsBlock
              Title="Sécurité"
              Text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            />
          </DetailsContainer>
        </div>
        <Footer />
      </div>
    </HelmetProvider>
  );
}
export default Apropos;
