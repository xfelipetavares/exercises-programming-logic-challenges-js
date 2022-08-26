/*

02 - Encontre o menor número de um array

Escreva um algoritmo que recebe um array de números inteiros, procure o menor valor e o retorne.

*/

function getMinNumber(numbers) {
  let numMenor = numbers[0]

  for (let i = 1; i < numbers.length; i++){
    if(numbers[i] <= numMenor){
      numMenor = numbers[i]
    }
  }
  return numMenor
}

module.exports = getMinNumber;