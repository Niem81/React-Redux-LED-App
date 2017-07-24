import {NUMBER_SELECTED, DOT_SELECTED, RESET_SELECTED} from '../actions/index'

const INITIAL_STATE = {
  number: '',
  inputCSS: 'display-container display-size-12',
  dotCSS: 'display-container display-size-12'
}

export default function (state=INITIAL_STATE, action){
  switch(action.type) {

    case NUMBER_SELECTED:
      return {
        number: action.payload,
        inputCSS: 'display-container display-size-12 display-no-' + action.payload,
        dotCSS: 'display-container display-size-12 display-no-' + action.payload
      }

    case DOT_SELECTED:
      return {
        number: action.payload,
        inputCSS: 'display-container display-size-12 display-dot',
        dotCSS: 'display-container display-size-12'
      }

    case RESET_SELECTED:
      return INITIAL_STATE

    default:
    return state;
  }
}
