import Form from "../../../components/Form";
import Layout from "../../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  const { data } = await res.json();

  return data;
};
export default function Editar() {
  const router = useRouter();
  const { id } = router.query;

  const { data: software, error } =  useSWR(
    id ? `/api/software/${id}` : null,
    fetcher
  );


  if (!software)
    return (
      <Layout>
        <h2>Loading...</h2>
      </Layout>
    );
  const formm = {
    pregunta: software.pregunta,
    description: software.description,
    link: software.link,
  };
  if (error)
    return (
      <Layout>
        <h2>Error</h2>
      </Layout>
    );
  return (
    <Layout>
      <Form newQuest={false} formm={formm} route={"/software"} url={`/api/software/${id}`}/>
    </Layout>
  );
}
// export async function getServerSideProps({params}){
//   try {
//     const res = await fetch(params.id ? `/api/software/${params.id}`: null)
//     const data = await res.json()
//     return {
//       props: {data}
//     }
//   } catch (error) {
//    console.log(error); 
//   }
// }