import DBConnect from "../../../libs/dbConnect";
import NextjsModel from "../../../models/NextjsModel";


export default async function handler(req, res){
    DBConnect()
    const {method, query:{id}} = req;
    switch (method) {
        case 'GET':
            const Quest = await NextjsModel.findById(id)
            if(!Quest) return res.status(403).json({success: false, error:'Ha ocurrido un error'})
            res.status(200).json({success:true, data: Quest})    
        default:
        res.status(403).json({success: false, error: 'Ha ocurrido un error'})
    }
}