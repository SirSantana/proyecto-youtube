import Layout from "../../../components/Layout";
import Image from 'next/image'
import styles from '../../menu/Menu.module.css'
import Link from 'next/link'
import HistoriaModel from "../../../models/HistoriaModel";

export default function ResponseHistory(){
    return(
        <Layout>
            {/* <h2 className={styles.correct}>Perfecto!</h2>
            <div className={styles.grid}>
            <div className={styles.card}>
            <h2 className={styles.h2}>Recordemos...</h2>
                <h5>La Segunda Guerra Mundial fue un conflicto militar global
                     que se desarrolló entre 1939 y 1945. En ella se vieron
                      implicadas la mayor parte de las naciones del mundo.
                </h5>
                <Link  href="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2017/10/266759-segunda-guerra-mundial.jpg?itok=Z9t8JEhp">
                <a><button className={styles.buttonn}>Ver más</button></a>
                </Link>
            </div>
            </div>
            

          <div className={styles.div}>
          <button className={styles.button}>Regresar</button>
          <button className={styles.button}>Siguiente</button>
          </div> */}


        </Layout>
    )
}
export async function getServerSideProps({params}){
    try {
        const res = await HistoriaModel.findById(params.id)
        const data = res.toObject()
        data._id = data._id.toString()
        return{
            props: {data}
        }
    } catch (error) {
        console.log(res);
    }
}