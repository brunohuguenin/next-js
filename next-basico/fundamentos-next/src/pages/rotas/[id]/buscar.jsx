import { useRouter } from 'next/router';

const buscar = () => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <div>
      <h1>Rotas/ {id} / Buscar</h1>
    </div>
  );
};

export default buscar;
