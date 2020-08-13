import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { Modo } from "../Context/modo/modoContext";
const Home = () => {
  const { theme } = React.useContext(Modo);
  const homeTitle = "ordan Jaramillo";
  const [titulo, setTitulo] = React.useState("J");
  React.useEffect(() => {
    let title = "J";
    let i = 0;
    const type = setInterval(() => {
      title += homeTitle.charAt(i);
      setTitulo(title);
      i++;
      if (i === homeTitle.length) {
        clearInterval(type);
      }
    }, 200);
  }, []);

  return (
    <main className="main" style={{ background: theme.fondo }}>
      <div className="home">
        <div className="home__all">
          <div className="home__contenedor">
            <img
              className="home__contenedor__foto "
              src="foto.jpg"
              alt="Foto mia xd"
            />
          </div>
          <h1 style={{ color: theme.fuente }} className="home__titulo">
            {titulo}
          </h1>
          <p style={{ color: theme.fuente }} className="home__description">
            Portafolio de la materia 'Desarrollo del pensamiento', 1b Tecnología
            superior en desarrollo de sofware
          </p>
          <NavLink
            className="home__button"
            style={{
              color: theme.botones,
              border: `1px solid ${theme.botones}`,
            }}
            to="/portafolio"
          >
            Ver portafolio
          </NavLink>
        </div>
      </div>
    </main>
  );
};

export default Home;
