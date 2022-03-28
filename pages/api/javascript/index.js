import DBConnect from "../../../libs/dbConnect";
import JavascriptModel from "../../../models/JavascriptModel";


export default async function handler(req, res){
    await DBConnect()
    const {method} = req;

    switch (method) {
        case 'POST':
            try {
                const newQuest = new JavascriptModel(req.body)
                await newQuest.save()
                return res.status(200).json({success: true, newQuest})
            } catch (error) {
                res.status(403).json({success: false, error: 'Ha ocurrido un error'})
            }
    
    
        default:
            res.status(403).json({success: false, error: 'Ha ocurrido un error'})
    }
}