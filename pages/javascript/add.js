import Form from "../../components/Form";
import Layout from "../../components/Layout";


export default function Add(){
    return(
        <Layout>
            <Form url={"/api/javascript"} route={"/javascript"}/>
        </Layout>
    )
}