import Form from "../../../components/Form";
import Layout from "../../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";
import { useEffect } from "react";

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

  console.log(id)
  const { data: software, error } = useSWR(
    id ? `http://localhost:3000/api/software/${id}` : null,
    fetcher
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

      <Form newQuest={false} formm={formm} route={"/software"} url={`http://localhost:3000/api/software/${id}`}/>
    </Layout>
  );
}
