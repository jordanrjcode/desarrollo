import React, { useContext } from "react";
import "./Navbar.css";
import { Modo } from "../Context/modo/modoContext";
import UserContext from "../Context/user/usersContext";
import { NavLink, Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import BallotIcon from "@material-ui/icons/Ballot";
import SearchIcon from "@material-ui/icons/Search";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
const Navbar = () => {
  const [dark, setDark] = React.useState(true);
  const themeMode = dark === true ? <Brightness7Icon /> : <Brightness4Icon />;
  const { user, cerrarSesion } = useContext(UserContext);
  const { theme, isdark, setIsDark } = React.useContext(Modo);
  return (
    <nav className="navbar" style={{ background: theme.background }}>
      <div className="navbar__brand">
        <Link to="/">
          <img src="logo2.png" className="navbar__logo" alt="Logo" />
        </Link>
      </div>
      <div className="navbar__search" style={{ background: theme.background2 }}>
        <input
          style={{ color: theme.fuente }}
          type="text"
          className="navbar__search__input"
          name="search"
          placeholder="Buscar"
        />
        <SearchIcon
          style={{ color: theme.fuente }}
          className="navbar__search__icon"
        />
      </div>
      <div className="navbar__links">
        <NavLink
          style={{ color: theme.fuente2 }}
          className="navbar__links__items"
          to="/portafolio"
        >
          <BallotIcon />
        </NavLink>
        <NavLink
          style={{ color: theme.fuente2 }}
          className="navbar__links__items"
          to="/sobre-mi"
        >
          <AccountCircleIcon />
        </NavLink>
        <div
          className="navbar__links__items"
          style={{ color: theme.fuente2, cursor: "pointer" }}
          onClick={() => {
            setDark(!dark);
            setIsDark(!isdark);
          }}
        >
          {themeMode}
        </div>
        <a
          style={{ color: theme.fuente2 }}
          className="navbar__links__items"
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/jordanrjdev"
        >
          <TwitterIcon />
        </a>
        <a
          style={{ color: theme.fuente2 }}
          className="navbar__links__items"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/jordan-jaramillo-2092a218b/"
        >
          <LinkedInIcon />
        </a>
        {user ? (
          <button
            style={{ color: theme.fuente2 }}
            onClick={() => {
              cerrarSesion();
            }}
            className="navbar__links__items"
          >
            <ExitToAppIcon />
          </button>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
