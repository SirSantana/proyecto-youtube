import Form from "../../components/Form";
import Layout from "../../components/Layout";


export default function New(){
    return(
        <Layout>
            <Form url={"/api/historia"} route={"/historia"}/>
        </Layout>
    )
}