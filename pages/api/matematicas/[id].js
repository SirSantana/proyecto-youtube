import DBConnect from "../../../libs/dbConnect";
import MatematicasModel from "../../../models/MatematicasModel";


export default async function handler(req, res){
    await DBConnect()
    const {method, query:{id}} = req;
    console.log(query);
    console.log(req);
    switch (method) {
        case 'GET':
             try {
                 const Quest = await MatematicasModel.findById(id)
                 if(!Quest) return res.status(403).json({success: false, error: 'Algo ha salido mal bro'})
                return  res.status(200).json({success: true, data: Quest})
             } catch (error) {
                 res.status(403).json({success: false, error: 'Algo ha salido mal'})
             }
    
        default:
            res.status(403).json({success: false, error: 'Algo ha salido mal'})

    }
}