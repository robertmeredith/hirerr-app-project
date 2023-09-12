import getCurrentUser from '../utils/getCurrentUser'

export const INITIAL_STATE = {
  user: getCurrentUser(),
  title: '',
  cat: '',
  cover: '',
  images: [],
  desc: '',
  shortTitle: '',
  shortDesc: '',
  deliverytime: 0,
  revisionNumber: 0,
  features: [],
  price: 0,
}

export const gigReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }
    case 'ADD_IMAGES':
      return {
        ...state,
        cover: action.payload.cover,
        images: action.payload.images,
      }
    case 'ADD_FEATURE':
      return {
        ...state,
        features: [...state.features, action.payload],
      }
    case 'REMOVE_FEATURE':
      return {
        ...state,
        features: state.features.filter((feat) => feat !== action.payload),
      }
    default:
      return state
  }
}
