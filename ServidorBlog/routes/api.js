var express = require('express');
var router = express.Router();

const comentariosApiRouter = require('./api/comentarios')
const categoriaspiRouter = require('./api/categorias')

router.use('/categorias', categoriaspiRouter)
router.use('/comentarios', comentariosApiRouter)

module.exports = router;
