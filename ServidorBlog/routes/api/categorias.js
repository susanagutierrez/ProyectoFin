var express = require('express');
var router = express.Router();
var Categoria = require('../../models/categoria');


router.get('/', (req, res) => {
    Categoria.find((err, categorias) => {
        if(err) return res.status(500).json({error: err})
        res.json(categorias)
    })
})

router.post('/', (req, res) => {
    Categoria.create(req.body, (err, categoria) => {
        if (err) return res.json({ error: err })
        res.json(categoria)
    })
})

router.put('/:comentarioId', (req, res) => {
    Categoria.findByIdAndUpdate(req.params.categoriaId, req.body, {new:true} ,(err, categoria) => {
        if (err) return res.json({ error: err })
        res.json(categoria)
    })
})

router.delete('/:comentarioId', (req, res) => {
    Categoria.findByIdAndDelete(req.params.categoriaId,(err, categoria) => {
        if (err) return res.json({ error: err })
        res.json(categoria)
    })
})

module.exports = router;