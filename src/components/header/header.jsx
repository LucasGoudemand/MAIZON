import { NavLink } from "react-router-dom";

import logo from "../img/LOGO.png";
import "../header/header.css";

function Header() {
  return (
    <header>
      <NavLink className="logoLink" to="/">
        <img className="logoKasa" src={logo} alt="logo KASA"></img>
      </NavLink>

      <div className="navBar">
        <nav className="menu">
          <NavLink className="navMenu" to="/">
            Accueil
          </NavLink>
          <NavLink className="navMenu" to="/Apropos">
            A Propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
export default Header;
