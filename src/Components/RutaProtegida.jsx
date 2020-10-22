import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../Context/user/usersContext";
const RutaProtegida = ({ component: Component, ...props }) => {
  const { user, cargando, autenticado } = useContext(UserContext);
  return (
    <Route
      {...props}
      render={(props) =>
        autenticado !== true && user === null && !cargando ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default RutaProtegida;
