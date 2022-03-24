import mongoose from 'mongoose'


const softwareSchema = new mongoose.Schema({
    pregunta:{type: String, required:[true, 'Debes añadir una pregunta']},
    description:{type: String, required:[true, 'Debes añadir solo una repuesta bien']},
    link:{type:String, required: true}
},{
    versionKey:false 
})

export default mongoose.models.software || mongoose.model('software', softwareSchema)
