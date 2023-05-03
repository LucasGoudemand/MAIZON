import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin:0;
  }

  .ContainerMain {
    margin: 0 auto;
    padding-top:40px;
    padding-left:20px;
    padding-right:20px;
    max-width:1240px;
    font-family: Montserrat;
    font-weight:500;
  }
  @media all and (max-width: 968px) {
    .ContainerMain {
      
      padding-left:20px;
      padding-right:20px;
      
    }
  }
`;

export default GlobalStyle;
