import React from "react";

import Header from "../components/header/header.jsx";
import Footer from "../components/footer/footer.jsx";
import Slider from "../components/slider/slider.jsx";

import Description from "../components/description/description.jsx";
import DescriptionDetailled from "../components/description/descriptionDetailled.jsx";
import logements from "../api/logements.json";
import { useParams } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

function FicheLogement(props) {
  let { id } = useParams();
  const appartement = logements.find((logement) => logement.id === id);

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Details du logement</title>
        </Helmet>
        <div className="ContainerMain">
          <Header />
          <section>
            <Slider logements={appartement} />
            <Description logements={appartement} />
            <DescriptionDetailled logements={appartement} />
          </section>
        </div>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default FicheLogement;
