import "./App.css";
import Card from "./components/cards/card";
const App = () => {
  window.addEventListener("scroll", () => {
    const toTop = document.querySelector(".to-top");
    if (window.pageYOffset > 100) {
      toTop.classList.add("active");
    } else {
      toTop.classList.remove("active");
    }
  });
  return (
    <div className="parent">
      <header>
        <nav className="nav-main">
          <img src="/src/assets/INET white.png" alt="inet" height="43px" />
        </nav>
      </header>
      <Card />
      <a href="#" className="to-top">
        <i className="fa-solid fa-arrow-up"></i>
      </a>
    </div>
  );
};

export default App;
