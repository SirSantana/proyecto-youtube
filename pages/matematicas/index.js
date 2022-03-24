import Layout from "../../components/Layout";
import DBConnect from "../../libs/dbConnect"
import MatematicasModel from "../../models/MatematicasModel"
import Link from 'next/link'
import styles from "../menu/Menu.module.css";

export default function Matematicas({questions}){
    console.log(questions);
    return(
        <Layout title={"Matematicas || know.ly"}>
      <div className={styles.div1}>
        <h2 className={styles.h2}>Preguntas de Historia</h2>
        <hr className={styles.hr}/>
        {questions.map(({ _id, pregunta }) => (
          <div key={_id} className={styles.div}>
            <Link href={`/matematicas/${_id}`}>
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
        const res = await MatematicasModel.find({})
        const questions = res.map(el=>{
        const Quest = el.toObject()
        Quest._id = Quest._id.toString()
        return Quest;
    })
    return {
        props:{questions}
    }
    } catch (error) {
        console.log(error)
    }
}