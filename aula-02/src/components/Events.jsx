const Events = () => {
  const hadleClick = (e) => {
    console.log(e);
    console.log("Executou");
  };

  // 8 - FUNÇÃO DE RENDERIZAÇÃO
  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando isso!</h1>;
    } else {
      return <h1>Também posso renderizar isso!</h1>;
    }
  };

  // return 10 > 2 && <p>Carregando...</p>

  return (
    <div>
      <div>
        <button onClick={() => console.log("Testando um evento")}>
          Clique aqui
        </button>
      </div>
      {/* 7 - EVENTO COM FUNÇÃO */}
      <div>
        <button onClick={hadleClick}>Clique aqui também</button>
      </div>
      {/* 8 - FUNÇÃO DE RENDERIZAÇÃO */}
      {renderSomething(true)}
      {renderSomething(false)}

    </div>
  );
};

export default Events;
