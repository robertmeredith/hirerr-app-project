import express from 'express'
import 'dotenv/config'
import connect from './connectdb.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

// Import Routes
import authRouter from './routes/auth.route.js'
import conversationRouter from './routes/conversation.route.js'
import gigRouter from './routes/gig.route.js'
import messageRouter from './routes/message.route.js'
import orderRouter from './routes/order.route.js'
import reviewRouter from './routes/review.route.js'
import userRouter from './routes/user.route.js'
import { log } from 'console'

const app = express()

// FOR DEPLOYMENT to Heroku
import { dirname } from 'path'
import path from 'path'
import { fileURLToPath } from 'url'

// Parse JSON bodies
app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
app.use(express.json())
app.use(cookieParser())

const PORT = process.env.PORT || 5001

// DEPLOYMENT
const __filename = fileURLToPath(import.meta.url)
const __dirName = dirname(__filename)
// DEPLOYMENT - location of build file
app.use(express.static(path.resolve(__dirName, 'client/build')))

app.get('/api/v1', (req, res) => {
  res.status(205).json({ msg: 'Welcome' })
})

// Route endpoints
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/conversations', conversationRouter)
app.use('/api/v1/gigs', gigRouter)
app.use('/api/v1/messages', messageRouter)
app.use('/api/v1/orders', orderRouter)
app.use('/api/v1/reviews', reviewRouter)
app.use('/api/v1/users', userRouter)

// DEPLOYMENT - after trying above routes, serve index.html file

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirName, 'client/build', 'index.html'))
})
// app.use(express.static('client/build'))

// Error middleware
app.use((err, req, res, next) => {
  // Assign default 500 status if no status
  const errorStatus = err.status || 500
  const errorMessage = err.message || 'Something went wrong!'

  console.log('ERROR MIDDLEWARE')
  console.log('Res status: ', res.statusCode)
  console.log('Error Name', err.name)
  console.log('Error Value', err.value)
  console.log('Error Code', err.code)
  console.log('Message: ', err.message)
  console.log('Stack: ', err.stack)

  return res.status(errorStatus).send(errorMessage)
})

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
  connect(process.env.MONGODB_URI)
})
