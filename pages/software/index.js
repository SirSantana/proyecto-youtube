import Layout from "../../components/Layout";
import DBConnect from "../../libs/dbConnect";
import SoftwareModel from "../../models/SoftwareModel";
import Link from 'next/link'
import styles from "../menu/Menu.module.css";

export default function Software({Questions}){
    return(
        <Layout title="Ing. Software || know.ly">
            <div className={styles.div1}>
        <h2 className={styles.h2}>Preguntas de Ingenieria de Software Bas.</h2>
        <hr className={styles.hr}/>
        {Questions.map(({ _id, pregunta }) => (
          <div key={_id} className={styles.div}>
            <Link href={`/software/${_id}`}>
              <a>
                <button className={styles.buttonnn}>{pregunta}</button>
              </a>
            </Link>
          </div>
        ))}
      </div>
        </Layout>
    )
}
export async function getServerSideProps(){
    try {
        await DBConnect()
        const res = await SoftwareModel.find({})
        const Questions = res.map(el=>{
            const Quest = el.toObject()
            Quest._id = Quest._id.toString()
            return Quest
        })
        return{
            props:{ Questions}
        }
    } catch (error) {
        console.log(error);
    }
}