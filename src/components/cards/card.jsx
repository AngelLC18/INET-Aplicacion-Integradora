import React from "react";
import "./cards.css";
import { useState } from "react";
const Card = () => {
  const [checkedCard, setCheckedCard] = useState(null);

  const handleChange = (event) => {
    const clickedCard = event.target.id;
    setCheckedCard(clickedCard === checkedCard ? null : clickedCard);
  };

  return (
    <div className="general-container">
      <input
        className="radio"
        type="radio"
        name="card"
        id="card-1"
        checked={checkedCard === "card-1"}
        onChange={handleChange}
      />
      <label className="content" for="card-1">
        <span className="icon">
          <i className="fas fa-sun"></i>
        </span>
        <h3 className="card-title">
          Aulas Talleres Móviles
          <span className="subtitle">@hed</span>
        </h3>
      </label>
      <input
        className="radio"
        type="radio"
        name="card"
        id="card-2"
        checked={checkedCard === "card-2"}
        onChange={handleChange}
      />
      <label className="content" for="card-2">
        <span className="icon">
          <i className="fas fa-cloud-rain"></i>
        </span>
        <h3 className="card-title">
          Inversión en Educación Técnico Profesional
          <span className="subtitle">@lolaguti</span>
        </h3>
      </label>
      <input
        className="radio"
        type="radio"
        name="card"
        id="card-3"
        checked={checkedCard === "card-3"}
        onChange={handleChange}
      />
      <label className="content" for="card-3">
        <span className="icon">
          <i className="fas fa-cloud-moon"></i>
        </span>
        <h3 className="card-title">
          Catálogo de Instituciones y oferta formativa
          <span className="subtitle">@quentindrphotography</span>
        </h3>
      </label>
      <input
        className="radio"
        type="radio"
        name="card"
        id="card-4"
        checked={checkedCard === "card-4"}
        onChange={handleChange}
      />
      <label className="content" for="card-4">
        <span className="icon">
          <i className="fas fa-snowflake"></i>
        </span>
        <h3 className="card-title">
          Albergues y residencias estudiantiles
          <span className="subtitle">@punttim</span>
        </h3>
      </label>
      <input
        className="radio"
        type="radio"
        name="card"
        id="card-5"
        checked={checkedCard === "card-5"}
        onChange={handleChange}
      />
      <label className="content" for="card-5">
        <span className="icon">
          <i className="fas fa-snowflake"></i>
        </span>
        <h3 className="card-title">
          Albergues y residencias estudiantiles
          <span className="subtitle">@punttim</span>
        </h3>
      </label>
      <input
        className="radio"
        type="radio"
        name="card"
        id="card-6"
        checked={checkedCard === "card-6"}
        onChange={handleChange}
      />
      <label className="content" for="card-6">
        <span className="icon">
          <i className="fas fa-snowflake"></i>
        </span>
        <h3 className="card-title">
          Albergues y residencias estudiantiles
          <span className="subtitle">@punttim</span>
        </h3>
      </label>
      <input
        className="radio"
        type="radio"
        name="card"
        id="card-7"
        checked={checkedCard === "card-7"}
        onChange={handleChange}
      />
      <label className="content" for="card-7">
        <span className="icon">
          <i className="fas fa-snowflake"></i>
        </span>
        <h3 className="card-title">
          Albergues y residencias estudiantiles
          <span className="subtitle">@punttim</span>
        </h3>
      </label>
    </div>
  );
};

export default Card;
