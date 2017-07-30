import {NUMBER_SELECTED, DOT_SELECTED, RESET_SELECTED} from '../actions/index';

const INITIAL_STATE = {
  inputValue: '',
  led_a: 'led-off',
  led_b: 'led-off',
  led_c: 'led-off',
  led_d: 'led-off',
  led_e: 'led-off',
  led_f: 'led-off',
  led_g: 'led-off',
  led_dot: 'led-off'
};

export default function (state=INITIAL_STATE, action){
  switch(action.type) {

    case NUMBER_SELECTED:
      if (action.payload === "1") {
        return {
          inputValue: action.payload,
          led_a: 'led-off',
          led_d: 'led-off',
          led_e: 'led-off',
          led_f: 'led-off',
          led_g: 'led-off',
          led_dot: 'led-off'
        }
      } else if (action.payload === "2") {
        return {
          inputValue: action.payload,
          led_c: 'led-off',
          led_f: 'led-off',
          led_dot: 'led-off'
        }
      } else if (action.payload === "3") {
        return {
          inputValue: action.payload,
          led_e: 'led-off',
          led_f: 'led-off',
          led_dot: 'led-off'
        }
      } else if (action.payload === "4") {
        return {
          inputValue: action.payload,
          led_a: 'led-off',
          led_d: 'led-off',
          led_e: 'led-off',
          led_dot: 'led-off'
        }
      } else if (action.payload === "5") {
        return {
          inputValue: action.payload,
          led_b: 'led-off',
          led_e: 'led-off',
          led_dot: 'led-off'
        }
      } else if (action.payload === "6") {
        return {
          inputValue: action.payload,
          led_b: 'led-off',
          led_dot: 'led-off'
        }
      } else if (action.payload === "7") {
        return {
          inputValue: action.payload,
          led_d: 'led-off',
          led_e: 'led-off',
          led_f: 'led-off',
          led_g: 'led-off',
          led_dot: 'led-off'
        }
      } else if (action.payload === "8") {
        return {
          inputValue: action.payload,
          led_dot: 'led-off'
        }
      } else if (action.payload === "9") {
        return {
          inputValue: action.payload,
          led_e: 'led-off',
          led_dot: 'led-off'
        }
      } else if (action.payload === "0") {
        return {
          inputValue: action.payload,
          led_g: 'led-off',
          led_dot: 'led-off'
        }
      } else {
        return INITIAL_STATE
      }

    case DOT_SELECTED:
      return {
        inputValue: action.payload,
        led_a: 'led-off',
        led_b: 'led-off',
        led_c: 'led-off',
        led_d: 'led-off',
        led_e: 'led-off',
        led_f: 'led-off',
        led_g: 'led-off'
      }

    case RESET_SELECTED:
      return INITIAL_STATE

    default:
    return state
  }
}
