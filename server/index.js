import express from 'express'
import 'dotenv/config'
import connect from './connectdb.js'

const app = express()

const PORT = process.env.PORT || 5001

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
  connect(process.env.MONGODB_URI)
})
