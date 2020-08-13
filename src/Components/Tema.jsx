import React from "react";
import "./Tema.css";
import { Modo } from "../Context/modo/modoContext";
const Tema = () => {
  const { theme } = React.useContext(Modo);
  return (
    <div
      className="contenedor__tema animate__animated animate__bounceIn"
      style={{ background: theme.background2, color: theme.fuente }}
    >
      <div className="contenedor__imagen">
        <img className="imagen__tema" src="imagen1.png" alt="imagen tema" />
      </div>
      <h3 className="tema__titulo">Titulo Tema</h3>
      <button className="tema__button">Ver mas</button>
    </div>
  );
};

export default Tema;
