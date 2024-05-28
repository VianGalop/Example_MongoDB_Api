// import mongoose from 'mongoose'
import Producto from '../models/Producto.js'

export const index = async (req, res) => {
  const productos = await Producto.find()
  res.json(productos)
}

export const getByCategoria = async (req, res) => {
  const { categoria } = req.params
  const productos = await Producto.find({ categoria: { $regex: categoria, $options: 'i' } })
  res.json(productos)
}

export const store = async (req, res, next) => {
  try {
    const { nombre, categoria, precio, stock, vendedor } = req.body
    const productoNuevo = new Producto({ nombre, categoria, precio, stock, vendedor })
    const productoGuardado = await productoNuevo.save()
    return res.status(201).json(productoGuardado)
  } catch (error) {
    next(error)
  }
}

export const remove = async (req, res, next) => {
  try {
    const { id } = req.params

    await Producto.deleteOne({ _id: id })

    return res.json({ message: 'Producto eliminado' })
  } catch (error) {
    next(error)
  }
}

export const update = async (req, res, next) => {
  try {
    const { id } = req.params
    const { nombre, categoria, precio, stock, vendedor } = req.body

    const actualizado = await Producto.findByIdAndUpdate(id, { nombre, categoria, precio, stock, vendedor }, { new: true })
    res.json(actualizado)
  } catch (error) {
    next(error)
  }
}
