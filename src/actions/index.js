export const NUMBER_SELECTED = 'NUMBER_SELECTED';
export const DOT_SELECTED = 'DOT_SELECTED';
export const RESET_SELECTED = 'RESET_SELECTED';

export const selectNumber = (number) => {
  console.log("Numero ingresado: ", number);
  return {
        type: NUMBER_SELECTED,
        payload: number
  }
};

export const selectDot = (number) => {
  console.log("Valor ingresado: ", number);
  return {
        type: DOT_SELECTED,
        payload: number
  }
};

export const resetLed = () => {
  console.log("Volviendo a Nada");
  return {
        type: RESET_SELECTED,
        payload: ''
  }
};
