import { Router } from 'express'
import { getByCategoria, index, remove, store, update } from '../controllers/productos.controller.js'
import { validarDatosProducto, validarIdProducto } from '../middlewares.js'

const router = Router()

router.get('/', index)
router.get('/categoria/:categoria', getByCategoria)
router.post('/', validarDatosProducto, store)
router.delete('/:id', validarIdProducto, remove)
router.put('/:id', validarIdProducto, validarDatosProducto, update)

export default router
