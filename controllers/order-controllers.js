import Movie from '../models/Movies.js'
import Order from '../models/Order.js'
import asyncHandler from 'express-async-handler'

const buyTicket = asyncHandler(async (req, res) => {
	try {
		//Buy ticket
		//Look for the movie
		const movie = await Movie.findOne({ _id: req.params.movieID })

		//generate order
		const order = await Order.create({
			movie: movie.id,
		})

		//add user order
		user.movieOrders.push(order)
		//add attend to user
		movie.attendess.push(user.id)

		await user.save()
		await movie.save()
		res.status(200).json({ order })
	} catch (error) {
		res.status(400).json({ message: `${error}`.red })
	}
})

export default buyTicket
