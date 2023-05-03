import React, { useState } from "react";

import arrowLeft from "../img/ButtonSliderLeft.png";
import arrowRight from "../img/ButtonSliderRight.png";
import "../slider/slider.css";

function Slider(props) {
  const appartement = props.logements;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = appartement.pictures; // Tableau des images du logement

  const PrevClick = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1) //si l'user clique sur precedent quand l'index de l'image est deja à 0 alors derniere image
    );
  };

  const NextClick = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1) //si l'user clique sur suivant quand l'index de l'image est deja la derniere alors premiere image
    );
  };

  const divImgCaroucel = images.map(
    (
      image,
      index //je map mes images avec l'index, je conditionne si mon index correspond à mon useState alors j'applique mon effet de FadeId Sinon je masque la div
    ) => (
      <div
        className={`${
          index === currentImageIndex ? "fadeEffectIn" : "container-img"
        }`}
        key={index}
      >
        <img className="imagesLogements" src={image} alt="Logement" />
      </div>
    )
  );

  return (
    <div className="caroucel">
      {divImgCaroucel}

      <div className="pageNumber">
        {currentImageIndex + 1} / {images.length}
      </div>
      {images.length > 1 && ( //Si le tableau est supérieur à 1 donc au minimum 2 images car un tableau commence à 0 alors on affiche la suite
        <>
          <button className="buttonSliderLeft" onClick={PrevClick}>
            <img
              className="arrowSlider"
              src={arrowLeft}
              alt="Fleches de defillement gauche"
            />
          </button>
          <button className="buttonSliderRight" onClick={NextClick}>
            <img
              className="arrowSlider"
              src={arrowRight}
              alt="Fleches de defillement droite"
            />
          </button>
        </>
      )}
    </div>
  );
}

export default Slider;
