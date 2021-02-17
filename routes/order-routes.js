import express from 'express'
const router = express.Router()
import buyTicket from '../controllers/order-controllers.js'
import protect from '../middlewares/authMiddleware.js'

//ROUTES ORDERS

router.get('/buy-movie/:movieID', protect, buyTicket)

export default router
