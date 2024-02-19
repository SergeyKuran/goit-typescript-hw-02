/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/

function showMessage(message: string): void {
  if (typeof message === 'string') console.log(message)

  console.log('No show this message, becouse is type "number"')

}

function calc(num1: string | number, num2: string | number): string | number {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2
  }
  return num1.toString() + num2.toString()
}

function customError(): never {
  throw new Error('Error');
}

export { };