import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema(
	{
		username: {
			type: String,
			required: [true, 'Please write a username'],
			unique: [true, 'This username is already in use'],
		},

		password: {
			type: String,
			required: [true, 'Please write a password!'],
		},

		movieOrders: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Order',
			},
		],
	},
	{
		timestamps: true,
	}
)

userSchema.methods.mathPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next()
	}

	const salt = await bcrypt.genSalt(10)
	this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)
export default User
