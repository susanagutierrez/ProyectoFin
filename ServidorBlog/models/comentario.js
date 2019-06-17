const mongoose = require('mongoose')
const Schema = mongoose.Schema

// creamos la estructura con los campos 

let comentarioSchema = new Schema({
    titulo: String,
    descripcion: String,
    categoria: {type: Schema.Types.ObjectId, ref:'Categoria'}
})




module.exports = mongoose.model('Comentario', comentarioSchema)
