import express from 'express'
const router = express.Router()
import { authMiddleware } from '../middleware/authMiddleware.js'
import { getUsers, deleteUser, getUser } from '../controllers/user.controller.js'

router.route('/').get(getUsers)

router.route('/:userId').get(getUser).delete(authMiddleware, deleteUser)

export default router
