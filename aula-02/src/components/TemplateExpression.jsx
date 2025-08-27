// 4 - TEMPLATE EXPRESSION

const TemplateExpression = () => {
  const name = "Elson";
  const data = {
    age: 22,
    job: "QA",
  };

  return (
    <div>
      <p>A soma é {35 + 42}</p>
      <h3>Bem-vindo {name}</h3>
      <p>Sua idade é {data.age} anos e você é um {data.job}.</p>
    </div>
  );
};

export default TemplateExpression;
