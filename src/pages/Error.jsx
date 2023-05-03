import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";
import Header from "../components/header/header.jsx";
import Footer from "../components/footer/footer.jsx";
import { Helmet, HelmetProvider } from "react-helmet-async";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: center;
`;
const BaliseH1 = styled.h1`
  font-size: 288px;
  font-weight: 700;
  color: #ff6060;
  text-align: center;
  line-height: 20px;
  @media (min-width: 375px) and (max-width: 767px) {
    font-size: 99px;
  }
  @media (min-width: 768px) and (max-width: 968px) {
    font-size: 140px
`;
const BaliseP = styled.p`
  color: #ff6060;
  text-align: center;
  font-size: 36px;
  @media (min-width: 375px) and (max-width: 767px) {
    font-size: 18px;
  }
  @media (min-width: 768px) and (max-width: 968px) {
    font-size: 24px

`;
const BaliseLink = styled(Link)`
  align: center;
  text-align: center;
  margin-top: 50px;
  color: #ff6060;
  @media (min-width: 375px) and (max-width: 767px) {
    font-size: 13px;
  }
  @media (min-width: 768px) and (max-width: 968px) {
    font-size: 17px

`;
function Error() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Page introuvable 404</title>
        </Helmet>
        <div className="ContainerMain">
          <Header />
          <ErrorContainer>
            <BaliseH1>404</BaliseH1>
            <BaliseP>Oups! La page demandez n'existe pas.</BaliseP>
            <BaliseLink to="/">Retourner sur la page d'accueil</BaliseLink>
          </ErrorContainer>
        </div>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default Error;
