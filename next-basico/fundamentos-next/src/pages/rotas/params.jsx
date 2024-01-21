import { useRouter } from 'next/router';
import Link from 'next/link';

const index = () => {
  const router = useRouter();

  const id = router.query.id;
  const nome = router.query.nome;

  return (
    <div>
      <h1>
        Rotas Params:
        {id} {nome}
      </h1>
      <Link href="/rotas/">
        <button>Voltar para index</button>
      </Link>
    </div>
  );
};

export default index;
