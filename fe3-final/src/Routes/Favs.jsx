import React from "react";
import { useContext, useState } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import Card from "../Components/Card";

const Favs = () => {
  const { Tema } = useContext(ContextGlobal);

  const [Favs] = useState(JSON.parse(localStorage.getItem("favs") || "[]"));

  return (
    <div
      className="favs"
      style={{ background: Tema.backgroundHome, color: Tema.color }}
    >
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
        {Favs?.map((dentista) => {
          return (
            <Card key={dentista.id} id={dentista.id} name={dentista.name} username={dentista.username}/>
          );
        })}
      </div>
    </div>
  );
};

export default Favs;