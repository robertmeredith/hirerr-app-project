import mongoose from 'mongoose'

const connect = async (url) => {
  console.log('CONNECTING...')
  try {
    await mongoose.connect(url)
    console.log('Connected to mongoDB')
  } catch (error) {
    console.log(error)
  }
}

export default connect
