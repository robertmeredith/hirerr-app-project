import Message from '../models/message.model.js'
import Conversation from '../models/conversation.model.js'
import { createError } from '../utils/createError.js'

// GET ALL USER ORDERS
export const getAllUserMessages = async (req, res, next) => {}

// GET MESSAGES
export const getMessages = async (req, res, next) => {
  const { convId } = req.params


  try {
    const messages = await Message.find({ convId })
    return res.status(200).json(messages)
  } catch (error) {
    return next(error)
  }
}

// CREATE MESSAGE
export const createMessage = async (req, res, next) => {
  const { user } = req

  const newMessage = new Message({
    userId: user._id.toString(),
    convId: req.body.convId,
    desc: req.body.desc,
  })
  try {
    const savedMessage = await newMessage.save()
    const updatedConversation = await Conversation.findOneAndUpdate(
      { convId: req.body.convId },
      {
        $set: {
          readBySeller: user.isSeller,
          readByBuyer: !user.isSeller,
          lastMessage: req.body.desc,
        },
      },
      { new: true }
    )

    return res.status(201).json(savedMessage)
  } catch (error) {
    next(error)
  }
}
