import Layout from "../../../components/Layout";
import styles from "../../menu/Menu.module.css";
import Link from "next/link";
import HistoriaModel from "../../../models/HistoriaModel";
import { useEffect, useState } from "react";
import Correct from "../../../components/Correct";

export default function ResponseHistory({ data }) {
  const { pregunta,  link, _id, description } = data;

  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(initial);

  useEffect(() => {
    setInterval(() => {
      if (visible === false) {
        setCount((prevCount) => prevCount - 1);
      }
    }, 1000);
    setTimeout(() => {
      setVisible(true);
    }, 10000);
  }, [visible]);
  

  return (
    <Layout title={`${pregunta} || know.ly`}>
     <div className={styles.div1}>
        <h4 className={styles.description}>{pregunta}</h4>

        <div className={styles.grid}>
          <div className={styles.card1}>
            <h3 className={styles.description}>Recordemos...</h3>
            {visible ? (
              <h5 className={styles.descrip}>{description}</h5>
            ) : (
              <h2>{count}</h2>
            )}
            <Link href={link}>
              <a target="_blank">
                <button className={styles.buttonn}>Ver más</button>
              </a>
            </Link>
          </div>
          <div className={styles.div}>
            <Link href="/historia">
              <a>
                <button
                  className={styles.button}
                >
                  Regresar
                </button>
              </a>
            </Link>

            <button className={styles.button}>Siguiente</button>
          </div>
        </div>
        <hr className={styles.hr} />
        <h3 className={styles.h2}>Suscribete</h3>
      </div>
    </Layout>
  );
}
export async function getServerSideProps({ params }) {
  try {
    const res = await HistoriaModel.findById(params.id);
    const data = res.toObject();
    data._id = data._id.toString();
    return {
      props: { data },
    };
  } catch (error) {
    console.log(error);
  }
}
