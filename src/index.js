import express from 'express'
import { connectDB } from './config/db.js'
import productosRoutes from './routes/productos.routes.js'
import { handleErrors } from './middlewares.js'

const app = express()

connectDB()

app.use(express.json())

app.use('/api/productos', productosRoutes)

app.use(handleErrors)

app.listen(3000, () => console.log('Server running on http://localhost:3000'))
