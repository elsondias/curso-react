import "./App.css";

// 2 - CSS DE COMPONENTE
import MyComponet from "./components/MyComponet";
import Title from "./components/Title";

function App() {
  // 4 - CSS INLINE STYLE DINÂMICO
  const n = 15;

  // 5 - CLASSES DINÂMICAS
  const redTitle = true;

  return (
    <div>
      {/* 1 - CSS GLOBAL */}
      <h1>Olá, Mundo!</h1>
      {/* 2 - CSS DE COMPONENTE */}
      <MyComponet />
      <p>Pegou o CSS do componente</p>
      {/* 3 - CSS INLINE STYLE */}
      <p
        style={{ color: "red", padding: "25px", borderTop: "2px dotted blue" }}
      >
        Este elemento tem estilos inline
      </p>
      {/* 4 - CSS INLINE STYLE DINÂMICO */}
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        Testando CSS dinâmico
      </h2>
      <h2 style={n > 20 ? { color: "purple" } : { color: "pink" }}>
        Testando CSS dinâmico 2
      </h2>
      {/* 5 - CLASSES DINÂMICAS */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título vai ter uma classe dinâmica
      </h2>
      {/* 6 - CSS MODULES */}
      <Title />
    </div>
  );
}

export default App;
