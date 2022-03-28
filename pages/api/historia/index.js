import DBConnect from "../../../libs/dbConnect";
import HistoriaModel from "../../../models/HistoriaModel";

export default async function handler(req, res){
    await DBConnect()
    const {method} = req;
    switch (method) {
        case 'POST':
            try {
                const newQuest = new HistoriaModel(req.body)
                await newQuest.save()
               return res.status(200).json({success:true, newQuest})
            } catch (error) {
                res.status(403).json({success:false, error: 'Algo salio mal'})
            }
    
        default:
            res.status(403).json({success:false, error: 'Algo salio mal'})

    }
}
