import Movie from '../models/Movies.js'
import asyncHandler from 'express-async-handler'

// @desc    Fetch all movies
// @route   GET /api/movies
// @access  Public

const getAllMovies = asyncHandler(async (req, res) => {
	try {
		const movies = await Movie.find({})
		res.status(200).json(movies)
	} catch (error) {
		res.status(400).json({ message: `${error}`.red })
	}
})

const getMovie = asyncHandler(async (req, res) => {
	try {
		const { id } = req.params
		const movie = await Movie.findById(id)
		res.status(200).json({ movie })
	} catch (error) {
		res.status(400).json({ message: `${error}`.red })
	}
})

export { getAllMovies, getMovie }
