import express from 'express'
const router = express.Router()
import {
  getAllGigs,
  createGig,
  getSingleGig,
  editGig,
  deleteGig,
} from '../controllers/gig.controller.js'

import { authMiddleware } from '../middleware/authMiddleware.js'

router.route('/').get(getAllGigs).post(authMiddleware, createGig)
router
  .route('/:gigId')
  .get(getSingleGig)
  .patch(authMiddleware, editGig)
  .delete(authMiddleware, deleteGig)

export default router
