import { createContext } from "react";
import { useState } from "react";

export const initialState = {
  temas: {
    light: {
      backgroundHome: "white",
      backgroundNav: "rgb(204, 204, 204)",
      color: "black",
    },
    dark: {
      backgroundNav: "rgba(19, 20, 19, 0.7)",
      backgroundHome: "rgba(18, 18, 18, 0.59)",
      color: "white",
    },
  },
};

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {

  const [Tema, setTema] = useState(initialState.temas.light);

  const cambiarTema = () => {
    if (Tema === initialState.temas.dark) setTema(initialState.temas.light);
    if (Tema === initialState.temas.light) setTema(initialState.temas.dark);
  };

  const [Favs, setFavs] = useState(
    JSON.parse(localStorage.getItem("favs") || "[]")
  );

  return (
    <ContextGlobal.Provider value={{ Tema, cambiarTema, Favs, setFavs }}>
      {children}
    </ContextGlobal.Provider>
  );
};
