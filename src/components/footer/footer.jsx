import "../footer/footer.css";
import logoFooter from "../img/LOGOFOOTER.png";

function Footer() {
  return (
    <footer>
      <img className="logoFooter" src={logoFooter} alt="logo KASA"></img>
      <p className="markFooter"> © 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
export default Footer;
