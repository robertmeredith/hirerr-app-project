import express from 'express'
import { authMiddleware } from '../middleware/authMiddleware.js'
const router = express.Router()

import {
  createReview,
  deleteReview,
  getGigReviews,
} from '../controllers/review.controller.js'

router.route('/').post(authMiddleware, createReview)
router.route('/:reviewId').delete(authMiddleware, deleteReview)
router.route('/gig/:gigId').get(getGigReviews)

export default router
