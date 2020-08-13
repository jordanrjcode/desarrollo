import React from "react";
import temaContext from "../Context/temas/temaContext";
const Login = () => {
  const { iniciarSesion } = React.useContext(temaContext);
  const [datos, setDatos] = React.useState({
    email: "",
    password: "",
  });

  const obtenerDatos = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const { email, password } = datos;
  const login = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      alert("ingrese la contraseña");
      return;
    }
    if (!password.trim()) {
      alert("ingrese la contraseña");
      return;
    }

    iniciarSesion(email, password);
  };
  return (
    <div>
      <form onSubmit={login}>
        <input
          type="text"
          name="email"
          placeholder="Ingrese su email"
          onChange={(e) => {
            obtenerDatos(e);
          }}
        />
        <input
          type="password"
          name="password"
          onChange={(e) => {
            obtenerDatos(e);
          }}
          placeholder="Ingrese su contraseña"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
