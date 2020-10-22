import React, { useReducer } from "react";
import usersContext from "./usersContext";
import usersReducer from "./usersReducer";
import { auth } from "../../firebase";
import {
  INICIAR_SESION_EXITO,
  INICIAR_SESION_ERROR,
  USUARIO_AUTENTICADO,
  CERRAR_SESION,
  CARGANDO,
} from "../../types/index";
const UsersState = (props) => {
  const dataInicial = {
    user: null,
    autenticado: false,
    cargando: false,
  };
  const [state, dispatch] = useReducer(usersReducer, dataInicial);

  //Acciones
  const iniciarSesion = async (email, password) => {
    try {
      const res = await auth.signInWithEmailAndPassword(email, password);
      const usuario = {
        email: res.user.email,
        id: res.user.uid,
      };
      dispatch({
        type: INICIAR_SESION_EXITO,
        payload: usuario,
      });
    } catch (error) {
      dispatch({
        type: INICIAR_SESION_ERROR,
      });
    }
  };
  const cerrarSesion = () => {
    auth.signOut();
    dispatch({
      type: CERRAR_SESION,
    });
  };

  const obtenerUsuario = () => {
    dispatch({
      type: CARGANDO,
    });
    auth.onAuthStateChanged(function (usuario) {
      console.log(usuario);
      if (usuario) {
        const usuarioAutenticado = {
          email: usuario.email,
          id: usuario.uid,
        };
        dispatch({
          type: USUARIO_AUTENTICADO,
          payload: usuarioAutenticado,
        });
      } else {
        dispatch({
          type: INICIAR_SESION_ERROR,
        });
      }
    });
  };
  return (
    <usersContext.Provider
      value={{
        user: state.user,
        autenticado: state.autenticado,
        cargando: state.cargando,
        iniciarSesion,
        cerrarSesion,
        obtenerUsuario,
      }}
    >
      {props.children}
    </usersContext.Provider>
  );
};

export default UsersState;
