import jwt from 'jsonwebtoken'

// VERIFY tOKEN - attached as cookie
export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET)
}

export const createToken = (data) => {
  return jwt.sign(data, process.env.JWT_SECRET)
}
