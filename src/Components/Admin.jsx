import React, { useContext } from "react";
import "./Admin.css";
import temaContext from "../Context/temas/temaContext";
const Admin = () => {
  const {
    temas,
    urlImagen,
    agregarTema,
    obtenerTemas,
    subirImagen,
  } = useContext(temaContext);
  React.useEffect(() => {
    obtenerTemas();
    // eslint-disable-next-line
  }, []);
  const [data, setData] = React.useState({
    documento: "",
    titulo: "",
    descripcion: "",
    unidad: "",
    resumen: "",
  });
  const { documento, titulo, descripcion, unidad, resumen } = data;
  const [imagenPortada, setImagenPortada] = React.useState("");

  if (temas.length === 0) return null;
  const obtenerData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const seleccionarArchivo = (e) => {
    console.log(e.target.files[0]);
    const imagen = e.target.files[0];

    if (imagen === undefined) {
      console.log("sin imagen");
      return;
    }

    if (imagen.type === "image/jpeg" || imagen.type === "image/png") {
      console.log("enviando");
      subirImagen(imagenPortada, imagen);
    } else {
      console.log("archivo no válido");
      return;
    }
  };

  const enviar = (e) => {
    e.preventDefault();
    if (!documento.trim()) {
      alert("Error");
      return;
    }
    if (!titulo.trim()) {
      alert("Error");
      return;
    }
    if (!descripcion.trim()) {
      alert("Error");
      return;
    }
    if (!unidad.trim()) {
      alert("Error");
      return;
    }
    if (!resumen.trim()) {
      alert("Error");
      return;
    }
    agregarTema(unidad, documento, titulo, resumen, descripcion);
    console.log("agregado");
  };
  return (
    <div>
      <form onSubmit={enviar} className="admin__contenedor">
        <select
          className="admin__input"
          onChange={(e) => {
            obtenerData(e);
          }}
          name="unidad"
        >
          <option value="">--Seleccione la unidad--</option>
          <option value="unidad1">Unidad 1</option>
          <option value="unidad2">Unidad 2</option>
        </select>
        <input
          className="admin__input"
          onChange={(e) => {
            obtenerData(e);
          }}
          type="text"
          placeholder="Ingrese el nombre del documento"
          name="documento"
        />
        <input
          className="admin__input"
          onChange={(e) => {
            obtenerData(e);
          }}
          type="text"
          placeholder="Ingrese el titulo del tema"
          name="titulo"
        />
        <textarea
          className="admin__input"
          placeholder="Ingrese un breve resumen del tema"
          onChange={(e) => {
            obtenerData(e);
          }}
          name="resumen"
          cols="15"
          rows="10"
        ></textarea>
        <textarea
          className="admin__input"
          defaultValue=""
          onChange={(e) => {
            obtenerData(e);
          }}
          name="descripcion"
          cols="15"
          rows="10"
          placeholder="Ingrese la descripcion del tema"
        ></textarea>
        <button className="admin__input admin__button" type="submit">
          Enviar Tema
        </button>
        <select
          name="imagenPortada"
          onChange={(e) => {
            setImagenPortada(e.target.value);
          }}
          className="admin__input"
        >
          <option value="">--Unidad 1--</option>
          {temas[0].TodosLosTemas1.map((tema) => (
            <option key={tema.titleTema} value={tema.titleTema}>
              {tema.titleTema}
            </option>
          ))}
          <option value="">--Unidad 2--</option>
          {temas[0].TodosLosTemas2.map((tema) => (
            <option key={tema.titleTema} value={tema.titleTema}>
              {tema.titleTema}
            </option>
          ))}
        </select>
        <input
          type="file"
          name="imagen"
          className="admin__input"
          onChange={(e) => seleccionarArchivo(e)}
        />
      </form>
      {urlImagen !== null ? <p>{urlImagen}</p> : null}
    </div>
  );
};

export default Admin;
