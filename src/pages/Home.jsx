import React from "react";
import Header from "../components/header/header.jsx";
import Footer from "../components/footer/footer.jsx";
import Banner from "../components/banner/topbanner.jsx";
import Cards from "../components/cards/cards.jsx";
import logements from "../api/logements.json";
import background from "../components/img/BannerBackground.png";

import { Helmet, HelmetProvider } from "react-helmet-async";

function Home() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Accueil KASA</title>
        </Helmet>
        <div className="ContainerMain">
          <Header />
          <Banner
            backgroundImage={background}
            Title="Chez vous, partout et ailleurs"
          />
          <Cards logements={logements} />
        </div>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default Home;
