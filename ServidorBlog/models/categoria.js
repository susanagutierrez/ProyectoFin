const mongoose = require('mongoose')
const Schema = mongoose.Schema

// creamos la estructura con los campos 

let categoriaSchema = new Schema({
    descripcion: String,
    comentarios: {type: Schema.Types.ObjectId, ref:'Comentario'}
})


module.exports = mongoose.model('Categoria', categoriaSchema)
