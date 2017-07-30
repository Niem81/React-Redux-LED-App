import {NUMBER_SELECTED, DOT_SELECTED, RESET_SELECTED} from '../actions/index';

const INITIAL_STATE = {
  inputValue: '',
  a: 'led-off',
  b: 'led-off',
  c: 'led-off',
  d: 'led-off',
  e: 'led-off',
  f: 'led-off',
  g: 'led-off',
  dot: 'led-off'
};

export default function (state=INITIAL_STATE, action){
  switch(action.type) {

    case NUMBER_SELECTED:
      if (action.payload === "1") {
        return {
          inputValue: action.payload,
          a: 'led-off',
          d: 'led-off',
          e: 'led-off',
          f: 'led-off',
          g: 'led-off',
          dot: 'led-off'
        };
      } else if (action.payload === "2") {
        return {
          inputValue: action.payload,
          c: 'led-off',
          f: 'led-off',
          dot: 'led-off'
        };
      } else if (action.payload === "3") {
        return {
          inputValue: action.payload,
          e: 'led-off',
          f: 'led-off',
          dot: 'led-off'
        };
      } else if (action.payload === "4") {
        return {
          inputValue: action.payload,
          a: 'led-off',
          d: 'led-off',
          e: 'led-off',
          dot: 'led-off'
        };
      } else if (action.payload === "5") {
        return {
          inputValue: action.payload,
          b: 'led-off',
          e: 'led-off',
          dot: 'led-off'
        };
      } else if (action.payload === "6") {
        return {
          inputValue: action.payload,
          b: 'led-off',
          dot: 'led-off'
        };
      } else if (action.payload === "7") {
        return {
          inputValue: action.payload,
          d: 'led-off',
          e: 'led-off',
          f: 'led-off',
          g: 'led-off',
          dot: 'led-off'
        };
      } else if (action.payload === "8") {
        return {
          inputValue: action.payload,
          dot: 'led-off'
        };
      } else if (action.payload === "9") {
        return {
          inputValue: action.payload,
          e: 'led-off',
          dot: 'led-off'
        };
      } else if (action.payload === "0") {
        return {
          inputValue: action.payload,
          g: 'led-off',
          dot: 'led-off'
        };
      } else {
        return INITIAL_STATE;
      }

    case DOT_SELECTED:
      return {
        inputValue: action.payload,
        a: 'led-off',
        b: 'led-off',
        c: 'led-off',
        d: 'led-off',
        e: 'led-off',
        f: 'led-off',
        g: 'led-off'
      };

    case RESET_SELECTED:
      return INITIAL_STATE;

    default:
    return state;
  }
}
