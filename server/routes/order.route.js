import express from 'express'
import { authMiddleware } from '../middleware/authMiddleware.js'

import {
  getAllUserOrders,
  createOrder,
  intent,
  confirmOrderPayment,
} from '../controllers/order.controller.js'

const router = express.Router()

router.route('/').get(authMiddleware, getAllUserOrders)

router.route('/:gigId').post(authMiddleware, createOrder)
router.route('/create-payment-intent/:gigId').post(authMiddleware, intent)

router.route('/').put(authMiddleware, confirmOrderPayment)

export default router
