import express from 'express'
import { authMiddleware } from '../middleware/authMiddleware.js'
const router = express.Router()
import {
  getAllUserMessages,
  createMessage,
  getMessages,
} from '../controllers/message.controller.js'

router
  .route('/')
  .post(authMiddleware, createMessage)
  .get(authMiddleware, getAllUserMessages)

router.route('/conversation/:convId').get(authMiddleware, getMessages)

export default router
