import mongoose from 'mongoose'


const HistoriaSchema = new mongoose.Schema({
    pregunta:{type: String, required:[true, 'Debes añadir una pregunta']},
    r1:{type: String, required:[true, 'Debes añadir repuestas mal'] },
    r2:{type: String, required:[true, 'Debes añadir repuestas mal'] },
    r3:{type: String, required:[true, 'Debes añadir repuestas mal'] },
    rC:{type: String, required:[true, 'Debes añadir solo una repuesta bien']},
    description: {type:String, required:[true, 'Debes añadir una descripcion de respuesta']},
    link:{type:String, required: true}
},{
    versionKey:false 
})

export default mongoose.models.HistoriaModel || mongoose.model('HistoriaModel', HistoriaSchema)
