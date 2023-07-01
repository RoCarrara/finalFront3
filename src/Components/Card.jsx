import { Link } from "react-router-dom";
import img from "../images/doctor.jpg";
import likeIcon from "../images/like.png";
import likedIcon from "../images/iloveit.png";
import { useState, useEffect } from "react";


const Card = ({ name, username, id, removeFromFavorites }) => {
  
  const dentista = {
    id,
    name,
    username
  };

  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const dentistas = JSON.parse(localStorage.getItem("dentistas") || "[]");
    const dentistaExistente = dentistas.find(item => item.id === dentista.id);
    setIsFavorited(!!dentistaExistente);
  }, [dentista]);

  const addFav = () => {
    const dentistas = JSON.parse(localStorage.getItem("dentistas") || "[]");
    const dentistaExistente = dentistas.find(item => item.id === dentista.id);

    if (dentistaExistente) {
      setIsFavorited(false);
      const updatedDentistas = dentistas.filter(item => item.id !== dentista.id);
      localStorage.setItem("dentistas", JSON.stringify(updatedDentistas));
      removeFromFavorites(dentista.id);
      console.log(`se eliminó el dentista ${dentista.name} con id ${dentista.id} de local storage`);
      return;
    }

    dentistas.push(dentista);
    setIsFavorited(true);
    localStorage.setItem("dentistas", JSON.stringify(dentistas));
    console.log(`se agregó el dentista ${dentista.name} con id ${dentista.id} a local storage`);
  };

  return (
    <section className="card">
      <img className="imagen" src={img} alt="IMAGEN DE UN DOCTOR" />
      <h2>
        <Link to={`/${id}`}>{name}</Link>
      </h2>
      <h3>{username}</h3>

      <button onClick={addFav} className="favButton">
        {isFavorited ? (
          <img src={likedIcon} alt="Liked Icon" className="favIcon" />
        ) : (
          <img src={likeIcon} alt="Like Icon" className="favIcon" />
        )}
      </button>
    </section>
  );
};

export default Card;
