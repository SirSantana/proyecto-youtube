import Form from "../../components/Form";
import Layout from "../../components/Layout";


export default function Add(){
    return(
        <Layout>
            <Form route={"/software"} url={"/api/software"}/>
        </Layout>
    )
}