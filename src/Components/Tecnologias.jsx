import React from "react";
import "./Tecnologias.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faJs,
  faNodeJs,
  faBootstrap,
  faSass,
  faGit,
  faReact,
  faJava,
  faCss3Alt,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { Modo } from "../Context/modo/modoContext";
const Tecnologias = () => {
  const { theme } = React.useContext(Modo);
  return (
    <div className="contenedor__tecnologias">
      <div className="caja__tecnologia" style={{ background: theme.fondos }}>
        <FontAwesomeIcon icon={faHtml5} />
      </div>
      <div className="caja__tecnologia" style={{ background: theme.fondos }}>
        <FontAwesomeIcon icon={faJs} />
      </div>
      <div className="caja__tecnologia" style={{ background: theme.fondos }}>
        <FontAwesomeIcon icon={faCss3Alt} />
      </div>
      <div className="caja__tecnologia" style={{ background: theme.fondos }}>
        <FontAwesomeIcon icon={faBootstrap} />
      </div>
      <div className="caja__tecnologia" style={{ background: theme.fondos }}>
        <FontAwesomeIcon icon={faSass} />
      </div>
      <div className="caja__tecnologia" style={{ background: theme.fondos }}>
        <FontAwesomeIcon icon={faGit} />
      </div>
      <div className="caja__tecnologia" style={{ background: theme.fondos }}>
        <FontAwesomeIcon icon={faReact} />
      </div>
      <div className="caja__tecnologia" style={{ background: theme.fondos }}>
        <FontAwesomeIcon icon={faNodeJs} />
      </div>
      <div className="caja__tecnologia" style={{ background: theme.fondos }}>
        <FontAwesomeIcon icon={faDatabase} />
      </div>
      <div className="caja__tecnologia" style={{ background: theme.fondos }}>
        <FontAwesomeIcon icon={faPython} />
      </div>
      <div className="caja__tecnologia" style={{ background: theme.fondos }}>
        <FontAwesomeIcon icon={faJava} />
      </div>
    </div>
  );
};

export default Tecnologias;
