var express = require('express');
var router = express.Router();
const Comentario = require('../models/comentario')
const Categoria = require('../models/categoria')

router.get('/', (req, res) => {
    Comentario.find((err, comentarios) => {
        if (err) return res.json({ error: err })
        let nComentarios = comentarios.map(item => {
            let newComen = { ...item._doc }
            newComen.descripcion = item.descripcion
            return newComen
        })
        res.render('comentarios/index', {
            comentarios: nComentarios
        })
    })
})


router.get('/addcategoria', (req, res) => {
    Comentario.find((err, comentarios) => {
        let categoria = new Categoria()
        categoria.descripcion = 'Vehiculos'
        comentarios.forEach(comen => categoria.comentarios.push(comen))
        categoria.save(err => {
            if (err) return console.log(err)
            res.json(categoria)
        })
    })
})

router.get('/new', (req, res) => {
    Categoria.find((err, listaCategorias) => {
        res.render('comentarios/new', { categorias: listaCategorias })
    })
})


router.post('/create', (req, res) => {

    console.log(req.body)
    Comentario.create(req.body, (err, comentario) => {
        if (err) return res.json({ error: err })
        res.redirect('/comentarios/')
    })

})

router.get('/:comentarioId', (req, res) => {
    Comentario
        .findById(req.params.comentarioId)
        .populate('categoria')
        .exec((err, post) => {
            res.json(comentario)
        })
}) 

/* router.get('/:comentarioID', function(req, res) {
    let micomentario = req.params.comentarioID;
    console.log(micomentario)
}); */
module.exports = router;
