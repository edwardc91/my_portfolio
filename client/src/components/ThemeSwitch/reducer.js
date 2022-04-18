import * as actions from './actions'

const initialState = {
  currentTheme: "dark",
}

const themeSwitch = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_THEME:
      var dataThemeAttribute = "data-theme";
      var body = document.body;
      var newTheme =
        body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
      body.setAttribute(dataThemeAttribute, newTheme);
      return Object.assign({}, state, {
        currentTheme: newTheme,
      })

    default:
      return state
  }
}

export default themeSwitch