import "./App.css";

// 2 - IMAGEM EM ASSETS
import night from "./assets/night.jpg";

// 3 - USESTATE
import { useState } from "react";
import Data from "./components/Data";

// 4 - RENDERIZAÇÃO DE LISTA
import ListRender from "./components/ListRender";

// 7 - RENDERIZAÇÃO CONDICIONAL
import ConditionalRender from "./components/ConditionalRender";

// 8 - PROPS
import ShowUserName from "./components/ShowUserName";

// 9 - DESTRUCTURING DE PROPS
import CardDetails from "./components/CardDetails";

// 11 - RENDEREIZAÇÃO DE LISTA E PROPS
const cars = [
  { id: 1, brand: "VW", color: "Branco", km: 0 },
  { id: 2, brand: "Ford", color: "Vermelho", km: 34343 },
  { id: 3, brand: "Fiat", color: "Prata", km: 234 },
  { id: 4, brand: "Audi", color: "Preto", km: 0 },
];

// 12 - FRAGMENT
import Fragment from "./components/Fragment";

// 13 - CHILDREN
import Container from "./components/Container";

// 14 - FUNÇÃO EM PROP
import ExecuteFunction from "./components/ExecuteFunction";

// 15 - STATE LIFT
import Message from "./components/Message";
import ChangeMessage from "./components/ChangeMessage";

function App() {
  // 14 - FUNÇÃO EM PROP
  function showMessage() {
    console.log("Evento do componente pai");
  }

  // 15 - STATE LIFT
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App" style={{ paddingBottom: "500px" }}>
      <h1>Avançando em React</h1>
      {/* 1 - IMAGEM EM PUBLIC */}
      <img src="img.jpg" alt="rua" />
      {/* 2 - IMAGEM EM ASSETS */}
      <img src={night} alt="noite" />
      {/* 3 - USESTATE */ <Data />}
      {/* 4 - RENDERIZAÇÃO DE LISTA */}
      <ListRender />
      {/* 5 - RENDERIZAÇÃO CONDICIONAL */}
      <ConditionalRender />
      {/* 8 - PROPS */}
      <ShowUserName name="Elson" />
      {/* 9 - DESTRUCTURING DE PROPS */}
      <CardDetails brand="VW" km={100000} color="Azul" />
      <CardDetails brand="Ford" km={50000} color="Vermelho" />
      <CardDetails brand="BMW" km={0} color="Preto" />
      {/* 10 - REAPROVEITANDO COMPONENTES */}
      <CardDetails brand="Ford" km={123456} color="Roxo" />
      <CardDetails km={789456} color="Azul-Escuro" brand="Fiat" />
      {/* 11 - RENDEREIZAÇÃO DE LISTA E PROPS */}
      {cars.map((car) => (
        <CardDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
        />
      ))}
      {/* 12 - FRAGMENT */}
      <Fragment />
      {/* 13 - CHILDREN */}
      <Container>
        <p>Alguma coisa</p>
      </Container>
      {/* 14 - FUNÇÃO EM PROP */}
      <ExecuteFunction myFunction={showMessage} />
      {/* 15 - STATE LIFT */}
      <Message msg={message} />
      <ChangeMessage handleMessage={handleMessage} />
    </div>
  );
}

export default App;
