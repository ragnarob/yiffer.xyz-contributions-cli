const initialState = {
  theme: '',
};

export default function themeReducer(state = initialState, action) {
  switch (action.type) {
    case 'theme/setTheme':
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
}
