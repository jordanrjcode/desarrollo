import React from "react";
import "./Me.css";
import Tecnologias from "./Tecnologias";
import { Modo } from "../Context/modo/modoContext";
const Me = () => {
  const { theme } = React.useContext(Modo);
  return (
    <div
      className="contenedor__me"
      style={{ background: theme.fondo, color: theme.fuente }}
    >
      <h1 className="me__title animate__animated animate__rubberBand">
        Jordan Jaramillo
      </h1>
      <p className="me__subtitle ">
        Soy desarrollador web y fullstack developer en javascript desde hace 3
        años, tengo 18 años, me gustan los videojuegos retro, actualmente soy
        estudiante en ITSGG.
      </p>
      <p className="me__sub">-- Mis conocimientos --</p>
      <Tecnologias />
    </div>
  );
};

export default Me;
