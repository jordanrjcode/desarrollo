import React from "react";
import Tema from "./Tema";
import "./Portafolio.css";
import { Modo } from "../Context/modo/modoContext";
import temaContext from "../Context/temas/temaContext";
const Portafolio = () => {
  const { theme } = React.useContext(Modo);
  const temasContext = React.useContext(temaContext);
  const { temas, obtenerTemas } = temasContext;
  React.useEffect(() => {
    obtenerTemas();
    // eslint-disable-next-line
  }, []);
  if (temas.length === 0) return null;

  return (
    <div className="portafolio" style={{ background: theme.fondo }}>
      <h2 style={{ color: theme.fuente }} className="portafolio__titulo">
        Unidad 1
      </h2>
      <div className="contenedor__portafolio">
        {temas[0].TodosLosTemas1.map((tema) => (
          <Tema
            titulo={tema.titleTema}
            descripcion={tema.descripcionTema}
            imagen={tema.imagen}
            key={tema.titleTema}
          />
        ))}
      </div>
      <h2
        style={{ color: theme.fuente, margin: "25px 0" }}
        className="portafolio__titulo"
      >
        Unidad 2
      </h2>
      <div className="contenedor__portafolio">
        {temas[0].TodosLosTemas2.map((tema) => (
          <Tema
            imagen={tema.imagen}
            descripcion={tema.descripcionTema}
            titulo={tema.titleTema}
            key={tema.titleTema}
          />
        ))}
      </div>
    </div>
  );
};

export default Portafolio;
