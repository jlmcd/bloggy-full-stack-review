const initialState = {
  username: '',
  profilePic: '',
  name: ''
}

// Action Constants
const SET_USERNAME = 'SET_USERNAME'
const SET_PROFILE_PIC = 'SET_PROFILE_PIC'
const SET_NAME = 'SET_NAME'

// Action Builders
export function setUsername(username) {
  return {
    type: SET_USERNAME,
    payload: username
  }
}
export function setProfilePic(url) {
  return {
    type: SET_PROFILE_PIC,
    payload: url
  }
}
export function setName(name) {
  return {
    type: SET_NAME,
    payload: name
  }
}

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
