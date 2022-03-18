import DBConnect from "../../../libs/dbConnect";


export default async function handler(req,res){
    await DBConnect()
    const {method} = req;
    
}