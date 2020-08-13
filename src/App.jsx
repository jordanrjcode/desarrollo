import React from "react";
import TemaState from "./Context/temas/temaState";
import ModoContext from "./Context/modo/modoContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Admin from "./Components/Admin";
import Portafolio from "./Components/Portafolio";
import Me from "./Components/Me";
import Login from "./Components/Login";
const App = () => {
  return (
    <ModoContext>
      <TemaState>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/admin" exact component={Admin} />
            <Route path="/portafolio" exact component={Portafolio} />
            <Route path="/sobre-mi" exact component={Me} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </Router>
      </TemaState>
    </ModoContext>
  );
};

export default App;
