/*

01 - Encontre o maior número de um array

Escreva um algoritmo que recebe um array de números inteiros, procure o maior valor e o retorne.

*/


function getMaxNumber(numbers) {
  let numCompara = 0
  for (let i = 0; i < numbers.length; i++){
    if(numbers[i] >= numCompara ){
      numCompara = numbers[i]
    }
  }
  return numCompara
}

module.exports = getMaxNumber;

