import {NUMBER_SELECTED} from '../actions/index'

const INITIAL_STATE = {
  number: '',
  inputCSS: 'display-container display-size-12 display-no-0'
}

export default function (state=INITIAL_STATE, action){
  switch(action.type) {

    case NUMBER_SELECTED:
      return {
        number: action.payload,
        inputCSS: 'display-container display-size-12 display-no-' + action.payload
      }

    default:
    return state;
  }
}
