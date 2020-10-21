import React, { useReducer } from "react";
import usersContext from "./usersContext";
import usersReducer from "./usersReducer";
import { auth } from "../../firebase";
const UsersState = (props) => {
  const dataInicial = {
    user: null,
    activo: false,
  };
  const [state, dispatch] = useReducer(usersReducer, dataInicial);

  //Acciones
  const iniciarSesion = async (email, password) => {
    try {
      const res = await auth.signInWithEmailAndPassword(email, password);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const cerrarSesion = () => {
    auth.signOut();
  };
  return (
    <usersContext.Provider
      value={{
        user: state.user,
        activo: state.activo,
        iniciarSesion,
        cerrarSesion,
      }}
    >
      {props.children}
    </usersContext.Provider>
  );
};

export default UsersState;
