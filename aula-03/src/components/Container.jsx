const Container = ({children}) => {
  return <div>
    <h1>
        Este é o conteúdo do componente pai
        {children}
    </h1>
  </div>;
};

export default Container;
