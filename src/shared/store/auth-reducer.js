const initialState = {
  user: null,
  authModalType: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'auth/setUser':
      return {
        ...state,
        user: action.payload,
      };
    case 'auth/logout':
      return {
        ...state,
        user: null,
      };
    case 'auth/authModalType':
      return {
        ...state,
        authModalType: action.payload,
      };
    default:
      return state;
  }
}
