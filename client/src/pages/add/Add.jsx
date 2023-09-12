import './Add.scss'
import { useReducer, useState } from 'react'
import { gigReducer, INITIAL_STATE } from '../../reducers/gigReducer'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import upload from '../../utils/upload'
import newRequest from '../../utils/newRequest'
import { useNavigate } from 'react-router-dom'

const Add = () => {
  // Reducer
  const [state, dispatch] = useReducer(gigReducer)
  // State
  const [singleFile, setSingleFile] = useState(undefined)
  const [imageFiles, setImageFiles] = useState([])
  const [uploading, setUploading] = useState(false)

  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const handleChange = (e) => {
    dispatch({
      type: 'CHANGE_INPUT',
      payload: { name: e.target.name, value: e.target.value },
    })
  }

  // Deals with adding extra feature to state
  const handleFeature = (e) => {
    e.preventDefault()
    const { value } = e.target[0]
    dispatch({
      type: 'ADD_FEATURE',
      payload: value,
    })
    e.target[0].value = ''
  }


  // Deals with uploading images to Cloudinary, getting urls then adding to state
  const handleUpload = async () => {
    setUploading(true)

    try {
      const cover = await upload(singleFile)

      const images = await Promise.all(
        // transform imageFiles FileList to an array, map over to upload and return url
        [...imageFiles].map(async (file) => {
          const url = await upload(file)
          return url
        })
      )
      setUploading(false)
      dispatch({ type: 'ADD_IMAGES', payload: { cover, images } })
    } catch (error) {
      console.log(error)
    }
  }

  const { mutate } = useMutation({
    mutationFn: (gig) => newRequest(`/gigs`, gig).then((res) => res.data),
    onSuccess: queryClient.invalidateQueries('gigs'),
  })

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault()
    mutate(state)
    navigate('/myGigs')
  }

  return (
    <div className="add">
      <div className="container">
        <h2>Add New Gig</h2>
        <div className="sections">
          <div className="left">
            <label htmlFor="">Title</label>
            <input
              name="title"
              type="text"
              placeholder="e.g. I wil supply professional graphic design"
              onChange={handleChange}
            />
            <label htmlFor="">Category</label>
            <select name="cats" id="cats" onChange={handleChange}>
              <option value="design">Design</option>
              <option value="webdev">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <div className="images">
              <div className="image-inputs">
                <label htmlFor="">Cover Image</label>

                <input
                  type="file"
                  onChange={(e) => setSingleFile(e.target.files[0])}
                />
                <label htmlFor="">Upload Images</label>
                <input
                  type="file"
                  multiple
                  onChange={(e) => setImageFiles(e.target.files)}
                />
              </div>
              <button onClick={handleUpload}>
                {uploading ? '...uploading' : 'Upload'}
              </button>
            </div>
            <label htmlFor="">Description</label>
            <textarea
              name="desc"
              id=""
              cols="30"
              rows="10"
              placeholder="Brief description to introduce your services to customers"
              onChange={handleChange}
            ></textarea>
            <button onClick={handleSubmit}>Create</button>
          </div>
          <div className="right">
            <label htmlFor="">Service Title</label>
            <input
              type="text"
              placeholder="e.g. One-page web design"
              name="shortTitle"
              onChange={handleChange}
            />
            <label htmlFor="">Short Description</label>
            <textarea
              name="shortDesc"
              id=""
              cols="30"
              rows="10"
              placeholder="Short description of your service"
              onChange={handleChange}
            ></textarea>
            <label htmlFor="">Delivery Time (e.g. 3 days)</label>
            <input
              type="number"
              min={1}
              name="deliveryTime"
              onChange={handleChange}
            />
            <label htmlFor="">Revision Number</label>
            <input
              type="number"
              min={1}
              name="revisionNumber"
              onChange={handleChange}
            />
            <label htmlFor="">Add Features</label>
            <form action="" onSubmit={handleFeature} className="add-feature">
              <input type="text" placeholder="e.g. page design" />
              <button type="submit">Add</button>
            </form>
            <div className="added-features">
              {state?.features?.map((feature) => {
                return (
                  <div className="item" key={feature}>
                    <button
                      onClick={() =>
                        dispatch({ type: 'REMOVE_FEATURE', payload: feature })
                      }
                    >
                      {feature} <span>X</span>
                    </button>
                  </div>
                )
              })}
            </div>
            <label htmlFor="">Price</label>
            <input type="number" name="price" onChange={handleChange} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add
