const Titulo = (props) => {
  console.log(props);
  return (
    <>
      <h1>{props.principal}</h1>
      <h2>{props.secundario}</h2>
    </>
  );
};

export default Titulo;
