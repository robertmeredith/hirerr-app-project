import Review from '../models/review.model.js'
import Gig from '../models/gig.model.js'
import { createError } from '../utils/createError.js'

// CREATE REVIEW
export const createReview = async (req, res, next) => {
  try {
    if (req.user.isSeller) {
      return next(createError(403, "Sellers can't create a review"))
    }

    const newReview = new Review({
      userId: req.user._id,
      gigId: req.body.gigId,
      desc: req.body.desc,
      star: req.body.star,
    })

    const review = await Review.findOne({
      gigId: req.body.gigId,
      userId: req.user._id.toString(),
    })

    if (review) {
      return next(createError(403, 'You have already created a review for this gig'))
    }

    const savedReview = await newReview.save()

    await Gig.findByIdAndUpdate(req.body.gigId, {
      $inc: { totalStars: req.body.star, starNumber: 1 },
    })
    res.status(200).json(savedReview)
  } catch (error) {
    next(error)
  }
}

// DELETE REVIEW
export const deleteReview = (req, res, next) => {
  const { reviewId } = req.params

  try {
  } catch (error) {
    next(error)
  }
}

// GET GIG REVIEWS
export const getGigReviews = async (req, res, next) => {
  const { gigId } = req.params

  try {
    const gig = await Gig.findById(gigId)
    if (!gig) {
      return next(createError(404, 'No gig with this Id'))
    }
    const reviews = await Review.find({ gigId })
    return res.status(200).json(reviews)
  } catch (error) {
    next(error)
  }
}
