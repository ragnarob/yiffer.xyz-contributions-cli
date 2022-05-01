const initialState = {
  user: null,
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'auth/setUser':
      return {
        ...state,
        user: action.payload,
      }
    case 'auth/logout':
      return {
        ...state,
        user: null,
      }
    default:
      return state
  }
}