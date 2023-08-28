import "./App.css";

function App() {
  return (
    <>
      <div
        style={{
          width: 390,
          height: 844,
          position: "relative",
          background: "white",
        }}
      >
        <div
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
            src="https://via.placeholder.com/281x105"
          />
        </div>
        <div
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
        <div
          style={{
            width: 252,
            height: 96,
            left: 69,
            top: 217,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <img
            style={{ width: 252, height: 96 }}
            src="https://via.placeholder.com/252x96"
          />
        </div>
      </div>
    </>
  );
}

export default App;
