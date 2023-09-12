import Gig from '../models/gig.model.js'
import { createError } from '../utils/createError.js'

// GET ALL GIGS
export const getAllGigs = async (req, res, next) => {
  const { query } = req



  try {
    const filter = {
      // this syntax explained - we don't want the key to exist if there is no value to it
      // code check if there is a value, if so, creates the key and value and the spread syntax assigns it as a key on the object
      // if there is no value then the key isnt created
      ...(query.userId && { userId: query.userId }),
      ...(query.cat && { cat: query.cat }),
      ...(query.min &&
        query.max && { price: { $gt: query.min, $lt: query.max } }),
      ...(query.search && { desc: { $regex: query.search, $options: 'i' } }),
    }


    // If category is all, remove category from filter
    if (query.cat === 'all') {
      delete filter['cat']
    }

    const gigs = await Gig.find(filter).sort({ [query.sort]: -1 })
    res.status(200).json({ count: gigs.length, gigs })
  } catch (error) {
    next(error)
  }
}

// CREATE GIG
export const createGig = async (req, res, next) => {
  const { user } = req
  if (!user.isSeller) {
    return next(createError(403, 'Only sellers can create a gig'))
  }


  const newGig = new Gig({
    userId: user._id,
    ...req.body,
  })


  try {
    const savedGig = await newGig.save()

    res.status(201).json(savedGig)
  } catch (error) {
    next(error)
  }
}

// GET SINGLE GIG
export const getSingleGig = async (req, res, next) => {
  const { gigId } = req.params
  try {
    const gig = await Gig.findById(gigId)
    if (!gig) {
      return next(createError(404, 'Gig not found'))
    }

    return res.status(200).json(gig)
  } catch (error) {
    next(err)
  }
}

// EDIT GIG
export const editGig = (req, res, next) => {
  try {
  } catch (error) {}
}

// DELETE GIG
export const deleteGig = async (req, res, next) => {
  const { gigId } = req.params
  const { user } = req

  try {
    const gigToDelete = await Gig.findById(gigId)
    if (gigToDelete.userId !== user._id.toString()) {
      return next(createError(403, 'Not authorised to delete this gig record'))
    }
    await Gig.findByIdAndDelete(gigId)
    res.status(200).send('Gig was deleted')
  } catch (error) {
    next(error)
  }
}
