import mongoose from 'mongoose'


const HistoriaSchema = new mongoose.Schema({
    categoria:{type:String, required:[true, "Debes añadir una categoria"]},
    pregunta:{type: String, required:[true, 'Debes añadir una pregunta']},
    rmal1:{type: String, required:[true, 'Debes añadir repuestas mal'] },
    rmal2:{type: String, required:[true, 'Debes añadir repuestas mal'] },
    rmal3:{type: String, required:[true, 'Debes añadir repuestas mal'] },
    rcorrecta:{type: String, required:[true, 'Debes añadir solo una repuesta bien']},
    descripcion: {type:String, required:[true, 'Debes añadir una descripcion de respuesta']},
    date:{type: Date, default: Date.now}
},{
    versionKey:false 
})

const HistoriaModel = mongoose.model('HistoriaPreguntas', HistoriaSchema)

export default HistoriaModel