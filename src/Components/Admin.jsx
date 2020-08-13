import React, { useContext } from "react";
import temaContext from "../Context/temas/temaContext";
const Admin = () => {
  const { agregarTema } = useContext(temaContext);
  const [data, setData] = React.useState({
    documento: "",
    titulo: "",
    descripcion: "",
    unidad: "",
    resumen: "",
  });
  const { documento, titulo, descripcion, unidad, resumen } = data;
  const obtenerData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
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
      <form onSubmit={enviar}>
        <select
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
          onChange={(e) => {
            obtenerData(e);
          }}
          type="text"
          placeholder="Ingrese el nombre del documento"
          name="documento"
        />
        <input
          onChange={(e) => {
            obtenerData(e);
          }}
          type="text"
          placeholder="Ingrese el titulo del tema"
          name="titulo"
        />
        <textarea
          placeholder="Ingrese un breve resumen del tema"
          onChange={(e) => {
            obtenerData(e);
          }}
          name="resumen"
          cols="15"
          rows="10"
        ></textarea>
        <textarea
          defaultValue=""
          onChange={(e) => {
            obtenerData(e);
          }}
          name="descripcion"
          cols="15"
          rows="10"
          placeholder="Ingrese la descripcion del tema"
        ></textarea>
        <button type="submit">Enviar Tema</button>
      </form>
    </div>
  );
};

export default Admin;
