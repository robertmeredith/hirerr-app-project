import User from '../models/user.model.js'
import { verifyToken } from './jwt.js'
import { createError } from '../utils/createError.js'

// AUTH MIDDLEWARE
export const authMiddleware = async (req, res, next) => {
  // get cookie token
  const { accessToken } = req.cookies
  if (!accessToken) return next(createError(401, 'Invalid credentials'))

  // Decode token
  try {
    const payload = verifyToken(accessToken)
    const { id } = payload
    // find user by ID
    const user = await User.findById(id).select('-password')
    if (!user) {
      return next(createError(404, 'Authentication Invalid'))
    }

    req.user = user
  } catch (error) {
    return next(createError(403, 'Token not valid'))
  }
  next()
}
