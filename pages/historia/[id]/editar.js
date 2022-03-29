import Layout from '../../../components/Layout'
import Form from '../../../components/Form'
import {useRouter} from 'next/router'
import useSWR from 'swr';

async function fetcher(url){
    const res = await fetch(url)
    console.log(url);
    if(!res.ok){
        const error = new Error("An error occurred while fetching the data.");
        error.info = await res.json();
        error.status = res.status;
        throw error;
    }
    const {data} = await res.json()

    return data
}

export default function Editar(){
    const router = useRouter()
    const {id} = router.query;

    const {data: historia, error } = useSWR(id ? `/api/historia/${id}`: null, fetcher)
    console.log(id);
    console.log(historia);
    if(!historia){
        return(
            <Layout>
                <h2>Loading...</h2>
            </Layout>
        )
    }
    const formm={
        pregunta: historia.pregunta,
        description: historia.description,
        link: historia.link
    }
    if(error){
        return(
            <Layout>
            <h2>Error</h2>
            </Layout>
        )
    }
    return(
        <>
        <Layout>
            <h2>Editar</h2>
            <Form newQuest={false} formm={formm} url={`/api/historia/${id}`} route={"/historia"}/>
        </Layout>
        </>
    )
}