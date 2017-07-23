
// export const NEW_NUMBER = 'NEW_NUMBER';
export const NUMBER_SELECTED = 'NUMBER_SELECTED';
// export const FETCH_NUMBER = 'FETCH_NUMBER';
// export const ENTER_INPUT = 'ENTER_INPUT';
export const DOT_SELECTED = 'DOT_SELECTED';

export const selectNumber = (number) => {
  console.log("Numero ingresado: ", number);
  return {
        type: NUMBER_SELECTED,
        payload: number
  }
}

export const selectDot = (number) => {
  console.log("Valor ingresado: ", number);
  return {
        type: DOT_SELECTED,
        payload: number
  }
}
