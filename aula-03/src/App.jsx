import "./App.css";

// 2 - IMAGEM EM ASSETS
import night from "./assets/night.jpg";

// 3 - USESTATE
import { useState } from "react";
import Data from "./components/Data";

// 4 - RENDERIZAÇÃO DE LISTA
import ListRender from "./components/ListRender";

function App() {
  return (
    <div className="App" style={{ paddingBottom: "500px" }}>
      <h1>Avançando em React</h1>
      {/* 1 - IMAGEM EM PUBLIC */}
      <img src="img.jpg" alt="rua" />
      {/* 2 - IMAGEM EM ASSETS */}
      <img src={night} alt="noite" />
      {/* 3 - USESTATE */
      <Data />}
      {/* 4 - RENDERIZAÇÃO DE LISTA */
      <ListRender />}
    </div>
  );
}

export default App;
