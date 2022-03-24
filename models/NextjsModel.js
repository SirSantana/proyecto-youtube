import mongoose from "mongoose";

export const NextSchema = new mongoose.Schema({
    pregunta:{type: String, required:[true, 'Debes añadir una pregunta']},
    description:{type: String, required:[true, 'Debes añadir solo una repuesta bien'] },
    link:{type:String}
},{
    versionKey:false 
})
export default mongoose.models.Nextmodel || mongoose.model('Nextmodel', NextSchema)