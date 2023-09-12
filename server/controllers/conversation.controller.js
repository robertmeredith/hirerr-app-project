import Conversation from '../models/conversation.model.js'
import { createError } from '../utils/createError.js'

// CREATE CONVERSATION
export const createConversation = async (req, res, next) => {
  const { user } = req

  const newConversation = new Conversation({
    //  Custom Id separate to Mongo ID -> this will be seller Id followed by buyer id -> allows easy routing for any conversation
    // Route will be private as
    convId: user.isSeller
      ? user._id.toString() + req.body.to
      : req.body.to + user._id.toString(),
    sellerId: user.isSeller ? user._id.toString() : req.body.to,
    buyerId: user.isSeller ? req.body.to : user._id.toString(),
    readBySeller: user.isSeller,
    readByBuyer: !user.isSeller,
  })

  try {
    const savedConversation = await newConversation.save()
    res.status(201).json(savedConversation)
  } catch (error) {
    next(error)
  }
}

// GET ALL USER CONVERSATIONS
export const getAllUserConversations = async (req, res, next) => {
  const { user } = req

  try {
    const allConversations = await Conversation.find(
      user.isSeller
        ? { sellerId: user._id.toString() }
        : { buyerId: user._id.toString() }
    ).sort({ updatedAt: -1 })

    return res.status(200).json(allConversations)
  } catch (error) {
    return next(error)
  }
}

// GET SINGLE CONVERSATION
export const getSingleConversation = async (req, res, next) => {
  const { convId } = req.params
  const { user } = req
  try {
    const conversation = await Conversation.findOne({ convId })

    if (!conversation) {
      return next(createError(404, 'No conversation found'))
    }
    const authorised = user.isSeller
      ? conversation.sellerId === user._id.toString
      : conversation.buyerId === user._id.toString()
    if (!authorised) {
      return next(
        createError(401, 'No conversation found with your credentials')
      )
    }

    return res.status(200).json(conversation)
  } catch (error) {
    next(error)
  }
}

// UPDATE CONVERSATION
export const updateConversation = async (req, res, next) => {
  const { convId } = req.params
  const { user } = req

  try {
    const conversation = await Conversation.findOne({ convId })

    if (!conversation) {
      return next(createError(404, 'No conversation found'))
    }
    const authorised = user.isSeller
      ? conversation.sellerId === user._id.toString()
      : conversation.buyerId === user._id.toString()
    if (!authorised) {
      return next(
        createError(401, 'No conversation found with your credentials')
      )
    }

    const updatedConversation = await Conversation.findOneAndUpdate(
      {
        convId,
      },
      {
        $set: {
          ...(user.isSeller
            ? { readBySeller: !conversation.readBySeller }
            : { readByBuyer: !conversation.readByBuyer }),
        },
      },
      { new: true }
    )

    return res.status(200).json(updatedConversation)
  } catch (error) {
    return next(error)
  }
}
