import Layout from '../../components/Layout'
import styles from "../menu/Menu.module.css";
import DBConnect from '../../libs/dbConnect'
import NextjsModel from '../../models/NextjsModel';
import Link from 'next/link'
export default function index({questions}){
    return(
        <Layout title={"Next Js || know.ly"}>
           <div className={styles.div1}>
        <h2 className={styles.h2}>Preguntas de Next.Js</h2>
        <hr className={styles.hr}/>
        {questions.map(({ _id, pregunta }) => (
          <div key={_id} className={styles.div}>
            <Link href={`/nextjs/${_id}`}>
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
        const res = await NextjsModel.find({})
        const questions = res.map(el=>{
            const quest = el.toObject()
            quest._id = quest._id.toString()
            return quest;
        })
        return{
            props:{questions}
        }
    } catch (error) {
        console.log(error);
    }
}
