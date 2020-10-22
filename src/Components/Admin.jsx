import React, { useContext } from "react";
import "./Admin.css";
import temaContext from "../Context/temas/temaContext";
import { Editor } from "@tinymce/tinymce-react";
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
    cuerpo: "",
    unidad: "",
    imagenURL: "",
  });
  const { documento, titulo, cuerpo, unidad, imagenURL } = data;
  const [imagenPortada, setImagenPortada] = React.useState("");

  if (temas.length === 0) return null;
  const obtenerData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const seleccionarArchivo = (e) => {
    console.log(e.target.files[0]);
    const imagen = e.target.files[0];
    if (imagen === undefined) {
      return;
    }
    if (imagen.type === "image/jpeg" || imagen.type === "image/png") {
      console.log("enviando");
      subirImagen(imagenPortada, imagen);
    } else {
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
    if (!cuerpo.trim()) {
      alert("Error");
      return;
    }
    if (!unidad.trim()) {
      alert("Error");
      return;
    }
    if (!imagenURL.trim()) {
      alert("Error");
      return;
    }
    agregarTema(unidad, documento, titulo, cuerpo, imagenURL);
    setData({
      documento: "",
      titulo: "",
      cuerpo: "",
      unidad: "",
      imagenURL: "",
    });
  };
  const handleEditorChange = (content) => {
    setData({ ...data, cuerpo: content });
  };
  return (
    <div>
      <form onSubmit={enviar} className="admin__contenedor">
        <input
          type="text"
          className="admin__input"
          onChange={(e) => {
            setImagenPortada(e.target.value);
          }}
          placeholder="Nombre de imagen"
        />
        <input
          type="file"
          name="imagen"
          className="admin__input"
          onChange={(e) => seleccionarArchivo(e)}
        />
        {urlImagen !== null ? <p>{urlImagen}</p> : null}
        <hr />
        <select
          className="admin__input"
          onChange={(e) => {
            obtenerData(e);
          }}
          defaultValue=""
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
          value={documento}
          type="text"
          placeholder="Ingrese el nombre del documento"
          name="documento"
        />
        <input
          value={titulo}
          className="admin__input"
          onChange={(e) => {
            obtenerData(e);
          }}
          type="text"
          placeholder="Ingrese el titulo del tema"
          name="titulo"
        />
        <input
          className="admin__input"
          onChange={(e) => {
            obtenerData(e);
          }}
          type="text"
          placeholder="Imagen URL"
          name="imagenURL"
          value={imagenURL}
        />
        <div className="editor">
          <Editor
            apiKey="i8dn2l2jy07k41vjxwp809ymfvj7idp4nb1gp8bt5trr8caq"
            init={{
              height: 500,
              menu: {
                happy: { title: "Happy", items: "code" },
              },
              plugins: [
                "media",
                "code",
                "advlist autolink lists link image",
                "charmap print preview anchor help",
                "searchreplace visualblocks code",
                "insertdatetime media table paste wordcount",
              ],
              toolbar:
                "undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help",
              menubar: "happy, insert",
            }}
            onEditorChange={handleEditorChange}
          />
        </div>
        <button className="admin__input admin__button" type="submit">
          Enviar Tema
        </button>
      </form>
    </div>
  );
};

export default Admin;
