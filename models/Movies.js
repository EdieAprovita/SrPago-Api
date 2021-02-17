import mongoose from 'mongoose'

const movieSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},

	director: {
		type: String,
		required: true,
	},

	stars: {
		type: [String],
		required: true,
	},

	image: {
		type: String,
		required: true,
	},

	description: {
		type: String,
		required: true,
	},

	showtimes: {
		type: [String],
		required: true,
	},

	attendees: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
	],
})

const Movie = mongoose.model('Movie', movieSchema)
export default Movie
