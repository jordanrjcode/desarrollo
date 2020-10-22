import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import TemaState from "./Context/temas/temaState";
import ModoContext from "./Context/modo/modoContext";
import UserState from "./Context/user/usersState";

ReactDOM.render(
  <React.StrictMode>
    <UserState>
      <TemaState>
        <ModoContext>
          <App />
        </ModoContext>
      </TemaState>
    </UserState>
  </React.StrictMode>,
  document.getElementById("root")
);
