import Layout from "../../components/Layout";
import styles from "../menu/Menu.module.css";
import Link from "next/link";
import DBConnect from "../../libs/dbConnect";
import HistoriaModel from "../../models/HistoriaModel";

export default function Historia({ questions }) {
  return (
    <Layout title={"History || know.ly"}>
      <div className={styles.div1}>
        <h2 className={styles.h2}>Preguntas de Historia</h2>
        <hr className={styles.hr}/>
        {questions.map(({ _id, pregunta }) => (
          <div key={_id} className={styles.div}>
            <Link href={`/historia/${_id}`}>
              <a>
                <button className={styles.buttonnn}>{pregunta}</button>
              </a>
            </Link>
          </div>
        ))}
      </div>
      
    </Layout>
  );
}
export async function getServerSideProps() {
  try {
    await DBConnect();
    const res = await HistoriaModel.find({});
    const questions = res.map((el, index) => {
      const quest = el.toObject();
      quest._id = quest._id.toString();
      return quest;
    });
    return {
      props: { questions },
    };
  } catch (error) {
    console.log(error);
  }
}
