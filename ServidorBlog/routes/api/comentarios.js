var express = require('express');
var router = express.Router();
let Comentario = require('../../models/comentario')


router.get('/', (req, res) => {
    Comentario.find((err, comentarios) => {
        if(err) return res.status(500).json({error: err})
        res.json(comentarios)
    })
})

router.post('/', (req, res) => {
    Comentario.create(req.body, (err, comentario) => {
        if (err) return res.json({ error: err })
        res.json(comentario)
    })
})

router.put('/:postId', (req, res) => {
    Comentario.findByIdAndUpdate(req.params.comentarioId, req.body, {new:true} ,(err, comentario) => {
        if (err) return res.json({ error: err })
        res.json(comentario)
    })
})

router.delete('/:postId', (req, res) => {
    Comentario.findByIdAndDelete(req.params.comentarioId,(err, comentario) => {
        if (err) return res.json({ error: err })
        res.json(comentario)
    })
})


module.exports = router;
