import DBConnect from "../../../libs/dbConnect";
import SoftwareModel from "../../../models/SoftwareModel";


export default async function handler(req, res){
    const {method, query:{id}} = req;
    await DBConnect()

    switch (method) {
        case 'GET':
            try {
                const quest = await SoftwareModel.findById({id})
                if(!quest) return res.status(403).json({success: false, error: 'Algo ha fallado bro'})
                res.status(200).json({success: true, data: quest})
            } catch (error) {
                res.status(403).json({success: false, error: 'Algo ha fallado bro'})
            }
    
        default:
            res.status(403).json({success: false, error: 'Algo ha fallado bro'})
    }
    
     
}