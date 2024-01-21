import { useState } from 'react';

const form = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState(0);
  const [usuarios, setUsuarios] = useState([]);

  async function salvarUsuario() {
    await fetch('/api/form', {
      method: 'POST',
      body: JSON.stringify({ nome, idade }),
    });

    setNome('');
    setIdade(0);

    const response = await fetch('/api/form');
    const usuarios = await response.json();
    setUsuarios(usuarios);
  }

  function renderizarUsuario() {
    return usuarios.map((usuario, i) => {
      return (
        <li key={i}>
          {usuario.nome} tem {usuario.idade} anos.
        </li>
      );
    });
  }

  return (
    <div>
      <h1>Integrando com API #02</h1>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.nome)}
      />
      <input
        type="number"
        value={nome}
        onChange={(e) => setIdade(+e.target.nome)}
      />
      <button onClick={salvarUsuario}>Enviar</button>

      <ul>{renderizarUsuario()}</ul>
    </div>
  );
};

export default form;
