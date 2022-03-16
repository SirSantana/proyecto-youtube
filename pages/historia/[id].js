import Layout from "../../components/Layout";
import Image from 'next/image'
import styles from '../menu/Menu.module.css'

export default function ResponseHistory(){
    return(
        <Layout>
            <h2 className={styles.correct}>Perfecto!</h2>
            <div className={styles.grid}>
            <div className={styles.card}>
            <h2 className={styles.h2}>Recordemos...</h2>
                <h5>La Segunda Guerra Mundial fue un conflicto militar global
                     que se desarrolló entre 1939 y 1945. En ella se vieron
                      implicadas la mayor parte de las naciones del mundo.
                </h5>
                <Image src="/images/nazi.jpg" alt="logo" height={150}
          width={200}/>
            </div>
            </div>
            

          <div className={styles.div}>
          <button className={styles.button}>Siguiente</button>
          <button className={styles.button} >Regresar</button>
          </div>

        </Layout>
    )
}