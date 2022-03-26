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
export default function Editar({data}) {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const {pregunta, description, link} = data.data;

  // console.log(id)
  // const { data: software, error } = useSWR(
  //   id ? `http://localhost:3000/api/software/${id}` : null,
  //   fetcher
  // );

  if (!data)
    return (
      <Layout>
        <h2>Loading...</h2>
      </Layout>
    );
  const formm = {
    pregunta: pregunta,
    description: description,
    link: link,
  };
  // if (error)
  //   return (
  //     <Layout>
  //       <h2>Error</h2>
  //     </Layout>
  //   );
  return (
    <Layout>
      <Form newQuest={false} formm={formm} route={"/software"} url={`http://localhost:3000/api/software/${id}`}/>
    </Layout>
  );
}
export async function getServerSideProps({params}){
  try {
    const res = await fetch(params.id ? `http://localhost:3000/api/software/${params.id}`: null)
    const data = await res.json()
    return {
      props: {data}
    }
  } catch (error) {
   console.log(error); 
  }
}