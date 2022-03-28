import Layout from "../../../components/Layout";
import DBConnect from "../../../libs/dbConnect";
import JavascriptModel from "../../../models/JavascriptModel";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../../menu/Menu.module.css";

let initial = 5;
export default function Index({ quest }) {
  const { pregunta, link, _id, description } = quest;

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
    }, 5000);
  }, [visible]);
  return (
    <Layout title={`${pregunta} || know.ly`}>
      <div className={styles.div1}>
        <h4 className={styles.description}>{pregunta}</h4>

        <div className={styles.grid}>
          <div className={styles.card1}>
            <h3 className={styles.description}>Recordemos...</h3>
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
            <Link href="/javascript">
              <a>
                <button className={styles.button}>Regresar</button>
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
    await DBConnect();
    const res = await JavascriptModel.findById(params.id);
    const quest = res.toObject();
    quest._id = quest._id.toString();
    return {
      props: { quest },
    };
  } catch (error) {}
}
