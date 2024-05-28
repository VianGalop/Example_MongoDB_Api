import Producto from './models/Producto.js'

export const handleErrors = (err, req, res, next) => {
  console.log(err)
  return res.status(500).json({ message: 'Error interno' })
}

export const validarIdProducto = async (req, res, next) => {
  const { id } = req.params
  const producto = await Producto.findById(id)

  if (!producto) {
    return res.status(404).json({ message: 'Producto no encontrado' })
  }

  next()
}

export const validarDatosProducto = (req, res, next) => {
  const { nombre, categoria, precio, stock, vendedor } = req.body

  if (!nombre || !categoria || !precio || !stock || !vendedor) return res.status(400).json({ message: 'Faltan datos' })
  next()
}
