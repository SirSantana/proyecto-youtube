import DBConnect from "../../../libs/dbConnect";


export default async function handler(req,res){
    await DBConnect()
    const {method, query:{id}} = req;
    switch (method) {
        case 'GET':
            try {
                const Quest = await HistoriaModel.findById(id).lean()
                if(!Quest) return res.status(403).json({success: false, error: 'No existe la quest'})
               return  res.status(200).json({success: true, data: Quest})

            } catch (error) {
                res.status(403).json({error: 'Ha ocurrido un error'})
            }
           
    
        default:
            res.status(403).json({error: 'Ha ocurrido un error'})

    }
}