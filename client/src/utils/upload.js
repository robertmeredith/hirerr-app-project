import axios from 'axios' // import the default instance

// create a new instance without interceptors.
// you could also create this in its own module and import from there
const instance = axios.create()

const data = new FormData()


const uploadImage = async (file) => {
  const data = new FormData()
  data.append('file', file)
  data.append('upload_preset', 'hirerr')

  try {
    const response = await instance.post(
      'https://api.cloudinary.com/v1_1/robertmeredith/image/upload',
      data,
    )
    return response.data.url;
  } catch (error) {
    console.log(error)
  }
}

export default uploadImage
