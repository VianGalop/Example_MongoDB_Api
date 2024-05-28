import mongoose from 'mongoose'

const productoSchema = new mongoose.Schema({
  _id: {
    type: Number
  },
  nombre: {
    type: String,
    required: true
  },
  categoria: {
    type: String,
    required: true
  },
  precio: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  vendedor: {
    type: String,
    required: true
  },
  descuento: {
    type: Boolean,
    default: false
  },
  descontinuado: {
    type: Boolean,
    default: false
  }
})

const Producto = mongoose.model('Producto', productoSchema)

export default Producto
