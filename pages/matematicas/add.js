import Form from "../../components/Form";
import Layout from "../../components/Layout";
import DBConnect from "../../libs/dbConnect";
import MatematicasModel from "../../models/MatematicasModel";



export default function add(){
    return(
        <Layout >
            <Form url={"/api/matematicas"} route={"/matematicas"}/>
        </Layout>
    )
}

