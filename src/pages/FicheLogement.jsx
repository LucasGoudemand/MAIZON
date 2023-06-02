import React from "react";

import Header from "../components/header/header.jsx";
import Footer from "../components/footer/footer.jsx";
import Slider from "../components/slider/slider.jsx";

import Description from "../components/description/description.jsx";
import DescriptionDetailled from "../components/description/descriptionDetailled.jsx";
import logements from "../api/logements.json";
import { useParams } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function FicheLogement(props) {
  let { id } = useParams();
  const appartement = logements.find((logement) => logement.id === id);

  const navigate = useNavigate();

  useEffect(() => {
    if (appartement === undefined) {
      // Si la variable appartement renvoi undefined (elle n'a pas trouvé l'id) alors redirection vers /error
      navigate("/error");
    }
  }, [appartement, navigate]);

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Details du logement</title>
        </Helmet>
        <div className="ContainerMain">
          <Header />
          <section>
            {appartement ? ( //Si il trouve l'id alors il affiche le slider "?"
              <>
                <Slider logements={appartement} />
                <Description logements={appartement} />
                <DescriptionDetailled logements={appartement} />
              </>
            ) : (
              //sinon il affiche cette div ":"
              <div>Logement introuvable</div>
            )}
          </section>
        </div>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default FicheLogement;
