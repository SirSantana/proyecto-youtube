import mongoose from 'mongoose'

export const JavascriptSchema = new mongoose.Schema({
    pregunta:{type: String, required:[true, 'Debes añadir una pregunta']},
    description:{type: String, required:[true, 'Debes añadir solo una repuesta bien'] },
    link:{type:String}
},{
    versionKey:false 
})
export default mongoose.models.Javascriptmodel || mongoose.model('Javascriptmodel', JavascriptSchema)