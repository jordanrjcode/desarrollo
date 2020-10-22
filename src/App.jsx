import React, { useEffect, useContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RutaProtegida from "./Components/RutaProtegida";
import UserContext from "./Context/user/usersContext";
import Portafolio from "./Components/Portafolio";
import Navbar from "./Components/Navbar";
import Admin from "./Components/Admin";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Me from "./Components/Me";
const App = () => {
  const { obtenerUsuario } = useContext(UserContext);
  //Agregar funcion de obtener usuario para restringir las rutas
  useEffect(() => {
    obtenerUsuario();
  }, []);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <RutaProtegida path="/admin" exact component={Admin} />
        <Route path="/portafolio" exact component={Portafolio} />
        <Route path="/sobre-mi" exact component={Me} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
