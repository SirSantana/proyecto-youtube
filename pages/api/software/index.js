import DBConnect from '../../../libs/dbConnect'
import SoftwareModel from '../../../models/SoftwareModel';


export default async function handler(req, res){
    await DBConnect()
    const {method} = req;
    switch (method) {
        case 'POST':
            try {
                const newQuest = new SoftwareModel(req.body)
                await newQuest.save()
               return res.status(200).json({success: true, newQuest})
            } catch (error) {
                res.status(403).json({success: false, error: 'Algo ha fallado bro'})
            }    
        default:
            res.status(403).json({success: false, error: 'Algo ha fallado bro'})

    }
}