import { useState, useEffect } from 'react';

const questao = () => {
  const [questao, setQuestao] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/questao/123')
      .then((response) => response.json())
      .then(setQuestao);
  }, []);

  function renderazarResposta() {
    if (questao) {
      return questao.respostas.map((resp) => {
        return <li key={resp}>{resp}</li>;
      });
    }
    return false;
  }

  return (
    <div>
      <h1>Questao</h1>
      <div>
        <span>
          {questao?.id} - {questao?.enunciado}
        </span>
        <ul>{renderazarResposta()}</ul>
      </div>
    </div>
  );
};

export default questao;
