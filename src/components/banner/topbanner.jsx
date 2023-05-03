import styled from "styled-components";
import "../banner/topBanner.css";

const Container = styled.div`
  width: 100%;
  position: relative;
  margin-top: 60px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.backgroundImage});
  border-radius: 15px 15px 15px 15px;
  color: white;
  font-size: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    min-width: 340px;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
    border-radius: 10px;
    z-index: 1;
  }
`;

function Banner(props) {
  return (
    <Container
      className="containerBanner"
      backgroundImage={props.backgroundImage}
    >
      <h1 className="h1TopBanner">{props.Title}</h1>
    </Container>
  ); // On passe le background en props pour pouvoir mettre le background que l'on veut
}
export default Banner;
