import DBConnect from "../../../libs/dbConnect";
import NextjsModel from "../../../models/NextjsModel";


export default async function handler(req, res){
    await DBConnect()
    const {method, query:{id}} = req;

    switch (method) {
        case 'GET':
            try {
                const Quest = await NextjsModel.findById(id)
                if(!Quest) return res.status(403).json({success: false, error: 'Algo ha fallado bro'})
                res.status(200).json({success: true, data:Quest})
            } catch (error) {
                res.status(403).json({success: false, error: 'Algo ha fallado bro'})
            }
    
        default:
            res.status(403).json({success: false, error: 'Algo ha fallado bro'})

    }
}