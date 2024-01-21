import Titulo from '../../../components/Titulo';

const usandotitulo = () => {
  return (
    <>
      <Titulo
        principal="Página de Cadastro"
        secundario="Incluir, alterar e excluir coisas!"
      />
      <Titulo
        principal="Página de Login"
        secundario="Informe seu email e senha"
      />
    </>
  );
};

export default usandotitulo;
