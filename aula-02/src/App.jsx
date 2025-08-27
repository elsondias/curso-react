import "./App.css";

// 2 - IMPORTANDO COMPONENTE
import FirstComponent from "./components/FirstComponent"

// 4 - TEMPLATE EXPRESSION
import TemplateExpression from "./components/TemplateExpression"

// 5 - HIERARQUIA DE COMPONENTES
import MyComponent from "./components/MyComponents"

// 6 - EVENTS
import Events from "./components/Events"

function App() {
  // 3 - COMENTÁRIOS
  return (
    <>
      <div>
        {/* COMENTÁRIO JSX*/}
        <h1>Fundamentos do React</h1>
        <FirstComponent />
        <TemplateExpression />
        <MyComponent />
        <Events />
      </div>
    </>
  );
}

export default App;
