import "./App.css";

function App() {
  return (
    <div className="parent">
      <div
        className="bottom"
        style={{
          width: 281,
          height: 105,
          left: 55,
          top: 663,
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <img
          style={{
            width: 281,
            height: 105,
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: 16,
          }}
          src="/src/assets/Ministerio de Educación celeste.png"
        />
      </div>
      <div
        className="middle"
        style={{
          width: 343,
          height: 192,
          left: 24,
          top: 287,
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <img
          style={{ width: 343, height: 192 }}
          src="https://via.placeholder.com/343x192"
        />
      </div>
      <div className="logo">
        <img src="/src/assets/INET white.png" alt="inet-white" />
      </div>
    </div>
  );
}

export default App;
