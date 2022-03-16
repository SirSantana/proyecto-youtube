import Layout from "../../components/Layout";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
export default function Historia() {
  return (
    <Layout title={"History || know.ly"}>
      <div>
        <h4 className={styles.description}>
          ¿En qué año acabó la Segunda Guerra Mundial?
        </h4>

        
          <div className={styles.grid}>
            <Link href="/error/ModalError">
              <a className={styles.card}>
                <h2>1939</h2>
              </a>
            </Link>

            <Link href="/error/ModalError">
              <a className={styles.card}>
                <h2>1943</h2>
              </a>
            </Link>
            <Link href="/historia/:id">
              <a className={styles.card}>
                <h2>1945</h2>
              </a>
            </Link>

            <Link href="/error/ModalError">
              <a className={styles.card}>
                <h2>1946</h2>
              </a>
            </Link>
          </div>
        <hr className={styles.hr}/>
        <h3 className={styles.h3}>Suscribete</h3>
      </div>
    </Layout>
  );
}
