import React, { useReducer } from "react";
import temaContext from "./temaContext";
import temaReducer from "./temaReducer";
import { OBTENER_TEMAS, AGREGAR_TEMA } from "../../types/index";
import { db, auth } from "../../firebase";

const TemaState = (props) => {
  const dataInicial = {
    formulario: false,
  };

  const [state, dispatch] = useReducer(temaReducer, dataInicial);

  //Acciones
  const obtenerProyectos = async () => {
    try {
      const [unidad1, unidad2] = await Promise.all([
        db.collection("unidad1").get(),
        db.collection("unidad2").get(),
      ]);
      dispatch({
        type: OBTENER_TEMAS,
        payload: {
          temas: [unidad1.docs, unidad2.docs],
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
        formulario: dataInicial.formulario,
        obtenerProyectos,
        iniciarSesion,
        agregarTema,
      }}
    >
      {props.children}
    </temaContext.Provider>
  );
};

export default TemaState;
