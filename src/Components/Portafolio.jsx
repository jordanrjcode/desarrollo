import React from "react";
import Tema from "./Tema";
import "./Portafolio.css";
import { Modo } from "../Context/modo/modoContext";
import temaContext from "../Context/temas/temaContext";
const Portafolio = () => {
  const { theme } = React.useContext(Modo);
  const { obtenerProyectos } = React.useContext(temaContext);

  React.useEffect(() => {
    obtenerProyectos();
  }, []);

  return (
    <div className="portafolio" style={{ background: theme.fondo }}>
      <h2 style={{ color: theme.fuente }} className="portafolio__titulo">
        Portafolio
      </h2>
      <div className="contenedor__portafolio">
        <Tema />
        <Tema />
        <Tema />
        <Tema />
        <Tema />
        <Tema />
      </div>
    </div>
  );
};

export default Portafolio;
