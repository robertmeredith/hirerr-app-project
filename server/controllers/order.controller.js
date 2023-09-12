import Order from '../models/order.model.js'
import Gig from '../models/gig.model.js'
import { createError } from '../utils/createError.js'
import Stripe from 'stripe'

// GET ALL USER ORDERS
export const getAllUserOrders = async (req, res, next) => {
  const userId = req.user.id.toString()
  try {
    const searchObject = {
      ...(req.user.isSeller ? { sellerId: userId } : { buyerId: userId }),
      isCompleted: false,
    }

    const userOrders = await Order.find(searchObject)

    return res.status(200).json(userOrders)
  } catch (error) {
    return next(error)
  }
}

// CREATE ORDER
export const createOrder = async (req, res, next) => {
  const { gigId } = req.params
  try {
    const gig = await Gig.findById(gigId)

    if (!gig) {
      return next(createError(404, 'No gig found with this ID'))
    }

    const newOrder = new Order({
      gigId,
      img: gig.cover,
      title: gig.title,
      buyerId: req.user._id,
      sellerId: gig.userId,
      price: gig.price,
      payment_intent: 'temporary',
    })

    await newOrder.save()
    res.status(200).json(newOrder)
  } catch (error) {
    next(error)
  }
}

// PAYMENT INTENT
export const intent = async (req, res, next) => {

  const stripe = new Stripe(process.env.STRIPE_SECRET)

  const { gigId } = req.params
  try {
    const gig = await Gig.findById(gigId)
    if (!gig) {
      return next(createError(404, 'No gig matching this Id'))
    }

    // Create Stripe payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: gig.price * 100,
      currency: 'aud',
      automatic_payment_methods: {
        enabled: true,
      },
    })

    const newOrder = new Order({
      gigId,
      img: gig.cover,
      title: gig.title,
      buyerId: req.user._id,
      sellerId: gig.userId,
      price: gig.price,
      payment_intent: paymentIntent.id,
    })


    await newOrder.save()
    return res.status(200).send({
      clientSecret: paymentIntent.client_secret,
    })
  } catch (error) {}
}

export const confirmOrderPayment = async (req, res, next) => {
  const { payment_intent } = req.body

  try {
    const order = await Order.findOneAndUpdate(
      { payment_intent },
      {
        $set: {
          isCompleted: true,
        },
      }
    )

    await order.save()

    res.status(200).json('Order has been confirmed.')
  } catch (error) {
    return next(error)
  }
}
