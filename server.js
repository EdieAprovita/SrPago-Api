import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'

import connectDB from './config/db.js'

import userRoutes from './routes/auth-routes.js'
import moviesRoutes from './routes/movies-routes.js'
import orderRoutes from './routes/order-routes.js'
import index from './routes/index.js'

dotenv.config()

connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'))
}

app.use(express.json())

app.use('/', index)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/movies', moviesRoutes)

const PORT = process.env.PORT || 5000

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
	)
)
