import User from '../models/user.model.js'
import { createError } from '../utils/createError.js'

// GET ALL USERS
export const getUsers = async (req, res) => {
  try {
    const allUsers = await User.find({})
    return res.status(200).json(allUsers)
  } catch (error) {
    return next(err)
  }
}

// GET SINGLE USER
export const getUser = async (req, res, next) => {
  const { userId } = req.params

  try {
    const user = await User.findById(userId)
    if (!user) {
      return next(createError(404, 'No user with that Id'))
    }
    const { password, email, createdAt, isSeller, ...rest } = user.toObject()

    res.status(200).json(rest)
  } catch (error) {
    return next(err)
  }
}

// DELETE USER
export const deleteUser = async (req, res, next) => {
  const { userId } = req.params

  const userToDelete = await User.findById(userId)

  if (req.user._id.toString() !== userToDelete._id.toString()) {
    return next(createError(403, 'Not Authorised'))
  }
  await User.findByIdAndDelete(userId)
  return res.status(200).send('Succesfully deleted')
}
