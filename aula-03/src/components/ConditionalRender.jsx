import React from "react";

const ConditionalRender = () => {
  const x = false;

  const name = "Elson";

  return (
    <div>
      {/* 7 - RENDERIZAÇÃO CONDICIONAL*/}
      <h1>ConditionalRender</h1>
      <h3>Isso será exibido?</h3>
      {x && <p>Se x for true, sim!</p>}
      {/* 8 - ELSE */}
      <h3>Render Ternário</h3>
      {name === "Goku" ?(
      <div>
        <p>Olá Elson!</p>
      </div>
      ) : (
        <div>
            <p>Nome não encontrado</p>
        </div>
      )}
    </div>
  );
};

export default ConditionalRender;
