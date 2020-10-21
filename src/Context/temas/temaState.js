import React, { useReducer } from "react";
import temaContext from "./temaContext";
import temaReducer from "./temaReducer";
import { OBTENER_TEMAS, AGREGAR_TEMA, IMAGEN_SUBIDA } from "../../types/index";
import { db, auth, storage } from "../../firebase";

const TemaState = (props) => {
  const dataInicial = {
    temas: [],
    urlImagen: null,
  };

  const [state, dispatch] = useReducer(temaReducer, dataInicial);

  //Acciones
  const obtenerTemas = async () => {
    try {
      const [unidad1, unidad2] = await Promise.all([
        db.collection("unidad1").orderBy("order").get(),
        db.collection("unidad2").orderBy("order").get(),
      ]);
      const TodosLosTemas1 = [];
      const TodosLosTemas2 = [];
      unidad1.docs.forEach((doc) => {
        TodosLosTemas1.push(doc.data());
      });
      unidad2.docs.forEach((doc) => {
        TodosLosTemas2.push(doc.data());
      });

      dispatch({
        type: OBTENER_TEMAS,
        payload: {
          TodosLosTemas1,
          TodosLosTemas2,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Iniciar sesion
  const iniciarSesion = async (email, password) => {
    try {
      const res = await auth.signInWithEmailAndPassword(email, password);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const subirImagen = async (documento, imagen) => {
    try {
      const refImagen = storage.ref().child(documento).child("foto portada");
      await refImagen.put(imagen);
      const urlDescarga = await refImagen.getDownloadURL();
      dispatch({
        type: IMAGEN_SUBIDA,
        payload: {
          urlDescarga,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Agregar un tema
  const agregarTema = async (
    collec,
    documentooo,
    title,
    resumen,
    descripcion
  ) => {
    const tema = {
      titleTema: title,
      resumenTema: resumen,
      descripcionTema: descripcion,
    };
    try {
      await db.collection(collec).doc(documentooo).set(tema);
      dispatch({
        type: AGREGAR_TEMA,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <temaContext.Provider
      value={{
        temas: state.temas,
        urlImagen: state.urlImagen,
        obtenerTemas,
        iniciarSesion,
        agregarTema,
        subirImagen,
      }}
    >
      {props.children}
    </temaContext.Provider>
  );
};

export default TemaState;
