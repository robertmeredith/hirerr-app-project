import express from 'express'
import { authMiddleware } from '../middleware/authMiddleware.js'
const router = express.Router()
import {
  getAllUserConversations,
  createConversation,
  getSingleConversation,
  updateConversation,
} from '../controllers/conversation.controller.js'

router
  .route('/')
  .get(authMiddleware, getAllUserConversations)
  .post(authMiddleware, createConversation)

router
  .route('/:convId')
  .get(authMiddleware, getSingleConversation)
  .put(authMiddleware, updateConversation)

export default router
