import express from 'express'
const authroutes = express.Router()

import {
	authUser,
	registerUser,
	getUserProfile,
} from '../controllers/auth-controllers.js'

import protect from '../middlewares/authMiddleware.js'

//AUTH ROUTES

authroutes.post('/login', authUser)
authroutes.post('/signup', registerUser)
authroutes.get('/profile', (protect, getUserProfile))

export default authroutes
