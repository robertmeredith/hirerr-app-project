import User from '../models/user.model.js'
import bcrypt from 'bcrypt'
import { createToken } from '../middleware/jwt.js'
import { createError } from '../utils/createError.js'

// REGISTER
export const register = async (req, res, next) => {
  try {
    const { password } = req.body
    const hash = await bcrypt.hash(password, 10)

    const newUser = User({ ...req.body, password: hash })

    await newUser.save()
    res.status(201).json({ newUser })
  } catch (err) {
    next(err)
  }
}

// LOGIN
export const login = async (req, res, next) => {
  const { username, password: pass } = req.body
  try {
    // Check user
    const user = await User.findOne({ username })

    if (!user) {
      return next(createError(404, 'Invalid credentials'))
    }

    // Check password
    const validPassword = await bcrypt.compare(pass, user.password)
    if (!validPassword) return next(createError(404, 'Invalid credentials'))

    // Need to use this function to format data correctly from Mongoose object
    const { password, ...userInfo } = user.toObject()

    // Create Json web token
    const token = createToken({
      id: user._id,
      isSeller: user.isSeller,
    })

    res
      .cookie('accessToken', token, { httpOnly: true })
      .status(200)
      .json(userInfo)
  } catch (err) {
    next(err)
  }
}

// LOGOUT
export const logout = async (req, res) => {
  // clear cookie
  res
    .clearCookie('accessToken', {
      sameSite: 'none',
      secure: true,
    })
    .status(200)
    .send('User has been logged out.')
}
