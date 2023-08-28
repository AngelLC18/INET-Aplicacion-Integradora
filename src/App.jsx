import "./App.css";

function App() {
  return (
    <div className="general-container">
      <input className="radio" type="radio" name="card" id="card-1" checked />
      <label className="content" for="card-1">
        <span className="icon">
          <i className="fas fa-sun"></i>
        </span>
        <h3 className="card-title">
          Serra da Freita, Vale de Cambra, Portugal
          <span className="subtitle">@hed</span>
        </h3>
      </label>
      <input className="radio" type="radio" name="card" id="card-2" />
      <label className="content" for="card-2">
        <span className="icon">
          <i className="fas fa-cloud-rain"></i>
        </span>
        <h3 className="card-title">
          París, Paris, France
          <span className="subtitle">@lolaguti</span>
        </h3>
      </label>
      <input className="radio" type="radio" name="card" id="card-3" />
      <label className="content" for="card-3">
        <span className="icon">
          <i className="fas fa-cloud-moon"></i>
        </span>
        <h3 className="card-title">
          La Joue du Loup, Le Dévoluy, France
          <span className="subtitle">@quentindrphotography</span>
        </h3>
      </label>
      <input className="radio" type="radio" name="card" id="card-4" />
      <label className="content" for="card-4">
        <span className="icon">
          <i className="fas fa-snowflake"></i>
        </span>
        <h3 className="card-title">
          Jasper National Park, Jasper, Canada
          <span className="subtitle">@punttim</span>
        </h3>
      </label>
      <input className="radio" type="radio" name="card" id="card-5" />
      <label className="content" for="card-5">
        <span className="icon">
          <i className="fas fa-poo-storm"></i>
        </span>
        <h3 className="card-title">
          Sioux Falls, United States
          <span className="subtitle">@eugenetriguba</span>
        </h3>
      </label>
      <label className="content" for="card-6">
        <span className="icon">
          <i className="fas fa-poo-storm"></i>
        </span>
        <h3 className="card-title">
          Sioux Falls, United States
          <span className="subtitle">@eugenetriguba</span>
        </h3>
      </label>
      <label className="content" for="card-7">
        <span className="icon">
          <i className="fas fa-poo-storm"></i>
        </span>
        <h3 className="card-title">
          Sioux Falls, United States
          <span className="subtitle">@eugenetriguba</span>
        </h3>
      </label>
    </div>
  );
}

export default App;
