import React, { useState, useEffect } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
import { useContext } from "react";

const Favs = () => {
  const { tema } = useContext(ContextGlobal);
  const [dentistaFav, setDentistaFav] = useState([]);

  useEffect(() => {
    const storedDentistas = JSON.parse(localStorage.getItem("dentistas")) || [];
    setDentistaFav(storedDentistas);
  }, []);

  const removeFromFavorites = (id) => {
    const updatedDentistas = dentistaFav.filter(item => item.id !== id);
    setDentistaFav(updatedDentistas);
  };

  return (
    <section className='favs' style={{ background: tema.home, color: tema.color }}>
      <h1 className='h1fav'>Mi lista de favoritos</h1>
      <div className="card-grid">
        {dentistaFav.map(item => (
          <Card
            key={item.id}
            name={item.name}
            username={item.username}
            id={item.id}
            removeFromFavorites={removeFromFavorites}
          />
        ))}
      </div>
    </section>
  );
};

export default Favs;

