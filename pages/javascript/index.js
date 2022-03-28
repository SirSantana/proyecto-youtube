import Layout from '../../components/Layout'
import Link from 'next/link'
import DBConnect from '../../libs/dbConnect'
import JavascriptModel from '../../models/JavascriptModel'
import styles from "../menu/Menu.module.css";

export default function Index({quest}){
    return(
        <Layout title={"Javascript || know.ly"}>
<div className={styles.div1}>
        <h2 className={styles.h2}>Preguntas de Javascript</h2>
        <hr className={styles.hr}/>
        {quest.map(({ _id, pregunta }) => (
          <div key={_id} className={styles.div}>
            <Link href={`/javascript/${_id}`}>
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
        const res = await JavascriptModel.find({})
        const quest = res.map((ele)=>{
            const question = ele.toObject()
            question._id = question._id.toString()
            return question
        })
        return {
            props:{quest}
        }

    } catch (error) {
        console.log(error);
    }
}