import styles from './Porta.module.css';

const Porta = (props) => {
  return (
    <div className={styles.area}>
      <div className={styles.estrutura}>
        <div className={styles.porta}>
          <div className={styles.numero}>3</div>
          <div className={styles.macaneta}></div>
        </div>
      </div>
      <div className={styles.chao}></div>
    </div>
  );
};

export default Porta;
