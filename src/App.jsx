import "./App.css";

function App() {
  return (
    <div className="parent">
      <div
        className="bottom"
        style={{
          width: 281,
          height: 105,
          top: 463,
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
          
          top: 187,
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          display: "inline-flex",
        }}
    ><div class="wrapper">
      <div class="block mover"></div>
      <div class="block jumper"></div>
      <div class="block jumper"></div>
      <div class="block jumper"></div>
      <div class="block jumper"></div>
      
    </div>
  
        
      </div>
      <div className="logo" style={{ top:40 }}>
        <img src="/src/assets/INET white.png" alt="inet-white" />
      </div>
    </div>
  );
}

export default App;
<script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
