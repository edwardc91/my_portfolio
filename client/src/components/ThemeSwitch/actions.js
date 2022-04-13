import { action } from '../../helpers/actionCreator'

export const SET_THEME = 'SET_THEME'

export const setTheme = ( theme ) => action(SET_THEME, { theme })