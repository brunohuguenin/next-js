import Link from 'next/link';
import router from 'next/router';

const index = () => {
  function navegacaoSimples(url) {
    router.push(url);
  }

  function navegacaoComParams() {
    router.push({
      pathname: '/rotas/params',
      query: {
        id: 123,
        nome: 'Ana',
      },
    });
  }

  return (
    <div>
      <h1>Rotas Index</h1>
      <ul>
        <Link href="/rotas/params?id=23&nome=Ana">
          <li>Params</li>
        </Link>
        <Link href="/rotas/123/buscar">
          <li>Buscar</li>
        </Link>
        <Link href="/rotas/123/Daniel">
          <li>Daniel</li>
        </Link>
      </ul>
      <div
        style={{
          display: 'flex',
          flexDirection: 'colum',
          alignItems: 'flex-start',
        }}
      >
        <button onClick={() => router.push('/rotas/123/buscar')}>Buscar</button>
        <button onClick={() => navegacaoSimples('/rotas/123/buscar')}>
          Daniel
        </button>
        <button onClick={navegacaoComParams}>Params</button>
      </div>
    </div>
  );
};

export default index;
