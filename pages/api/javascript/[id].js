import DBConnect from "../../../libs/dbConnect";
import JavascriptModel from "../../../models/JavascriptModel";


export default async function handler(req, res){
    await DBConnect()
    const {method, query:{id}} = req;

    switch (method) {
        case 'PUT':
            try {
                const quest = await JavascriptModel.findByIdAndUpdate(id, req.body,{new:true, runValidators:true})
                if(!quest) return res.status(403).json({success: false, error: 'Algo ha fallado bro'})
               return  res.status(200).json({success: true, data: quest})
            } catch (error) {
                res.status(403).json({success: false, error: 'Algo ha fallado bro'})
            }
        case 'GET':
            try {
                const quest = await JavascriptModel.findById(id)
                if(!quest) return res.status(403).json({success: false, error: 'No se encontro'})
                return res.status(200).json({success: true, data: quest})
            } catch (error) {
                res.status(403).json({success: false, error: 'Error bro'})
            }
    
        default:
            res.status(403).json({success: false, error: 'Error bro'})

    }
}