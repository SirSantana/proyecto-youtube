import Layout from "../../../components/Layout";
import SoftwareModel from "../../../models/SoftwareModel";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../../menu/Menu.module.css";

let initial = 10;
export default function Index({ data }) {
  const { pregunta, link, description,_id } = data;
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
    <Layout>
      <div className={styles.div1}>
        <h4 className={styles.description}>{pregunta}</h4>

        <div className={styles.grid}>
          <div className={styles.card1}>
            <h3 className={styles.descriptionn}>Recordemos...</h3>
            {visible ? (
              <section className={styles.section}>
              <pre className={styles.descrip}>{description}</pre>
              </section>
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
            <Link href="/software">
              <a>
                <button className={styles.button}>Regresar</button>
              </a>
            </Link>

            <Link href={`/software/${_id}/editar`}>
            <a><button className={styles.button}>Editar</button></a>
            </Link>
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
    const res = await SoftwareModel.findById(params.id);
    const data = res.toObject();
    data._id = data._id.toString();
    return {
      props: { data },
    };
  } catch (error) {
    console.log(error);
  }
}
