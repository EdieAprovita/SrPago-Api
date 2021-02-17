import express from 'express'
const router = express.Router()
import { getAllMovies, getMovie } from '../controllers/movies-controllers.js'

//MOVIES ROUTES

router.get('/', getAllMovies)
router.get('/:id', getMovie)

export default router
