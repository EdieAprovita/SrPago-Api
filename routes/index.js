import express from 'express'
const router = express.Router()

/* GET home page */
router.get('/', (req, res, next) => {
	res.status(200).json('Movies Api Running Successfully!!')
})

export default router
