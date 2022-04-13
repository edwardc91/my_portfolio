import * as actions from './actions'

const initialState = {
  currentTheme: "dark",
}

const themeSwitch = (state = initialState, action) => {
    switch (action.type) {
      case actions.SET_THEME:
        return Object.assign({}, state, {
            currentTheme: action.payload.theme,
        })
  
      default:
        return state
    }
  }
  
  export default themeSwitch