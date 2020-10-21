import React from "react";

export const Modo = React.createContext();

const ModoContext = (props) => {
  const tema1 = {
    botones: "steelblue",
    fondo: "#212121",
    background: "#333333",
    background2: "#515151",
    fuente: "#f5f5f5",
    fuente2: "#fff",
    fondos: "#141414",
  };

  const tema2 = {
    botones: "#09f",
    fondo: "#fff",
    background: "#09f",
    background2: "#f6f6f6",
    fuente: "#000000",
    fuente2: "#fff",
    fondos: "#ccc",
  };

  const [isdark, setIsDark] = React.useState(true);
  const [theme, setTheme] = React.useState("");
  React.useEffect(() => {
    const verificarTema = () => {
      isdark === true ? setTheme(tema1) : setTheme(tema2);
    };
    verificarTema();
    // eslint-disable-next-line
  }, [isdark]);
  return (
    <Modo.Provider value={{ theme, isdark, setIsDark }}>
      {props.children}
    </Modo.Provider>
  );
};

export default ModoContext;
