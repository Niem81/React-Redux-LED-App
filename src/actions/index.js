
export const NEW_NUMBER = 'NEW_NUMBER';
export const NUMBER_SELECTED = 'NUMBER_SELECTED';
export const FETCH_NUMBER = 'FETCH_NUMBER';
export const ENTER_INPUT = 'ENTER_INPUT'

export const selectNumber = (number) => {
  console.log("Numero ingresado: ", number);
  return {
        type: NUMBER_SELECTED,
        payload: number
  }
}
