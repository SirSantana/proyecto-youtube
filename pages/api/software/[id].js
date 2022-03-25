import DBConnect from "../../../libs/dbConnect";
import SoftwareModel from "../../../models/SoftwareModel";


export default async function handler(req, res){
    const {method, query:{id}} = req;
    await DBConnect()
    
    switch (method) {
        case 'PUT':
            try {
                const quest = await SoftwareModel.findByIdAndUpdate(id, req.body,{new:true, runValidators:true})
                if(!quest) return res.status(403).json({success: false, error: 'Algo ha fallado bro'})
                res.status(200).json({success: true, data: quest})
            } catch (error) {
                res.status(403).json({success: false, error: 'Algo ha fallado bro'})
            }
    
            // case 'DELETE':
            //     try {
            //         const quest = await SoftwareModel.findByIdAndDelete(id)
            //         if(!quest) return res.status(403).json({success: false, error: 'Algo ha fallado bro'})
            //         res.status(200).json({success: true, data: quest})
            //     } catch (error) {
            //         res.status(403).json({success: false, error: 'Algo ha fallado bro'})
            //     }
    
                
        case 'GET':
            try {
                const quest = await SoftwareModel.findById(id).lean()
                if(!quest) return res.status(403).json({success: false, error: 'Algo ha fallado bro'})
                res.status(200).json({success: true, data: quest})
            } catch (error) {
                res.status(403).json({success: false, error: 'Algo ha fallado bro'})
            }
    
        default:
            res.status(403).json({success: false, error: 'Algo ha fallado bro'})
    }
    
     
}