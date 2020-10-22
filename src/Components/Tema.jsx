import React, { useState } from "react";
import "./Tema.css";
import { Modo } from "../Context/modo/modoContext";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    overflow: "auto",
    position: "absolute",
    width: 400,
    height: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Tema = ({ titulo, cuerpo, imagen }) => {
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { theme } = React.useContext(Modo);
  return (
    <div
      className="contenedor__tema animate__animated animate__bounceIn"
      style={{ background: theme.background2, color: theme.fuente }}
    >
      <div className="contenedor__imagen">
        <img className="imagen__tema" src={imagen} alt="imagen tema" />
      </div>
      <h3 className="tema__titulo">{titulo}</h3>
      <button
        className="tema__button"
        onClick={() => {
          handleOpen();
        }}
      >
        Ver mas
      </button>

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div
          style={modalStyle}
          className={classes.paper}
          dangerouslySetInnerHTML={{ __html: cuerpo }}
        ></div>
      </Modal>
    </div>
  );
};

export default Tema;
