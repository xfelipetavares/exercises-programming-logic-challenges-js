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

module.exports = getMinNumber([23, 5, 6, 4, 26, 87, 12, 62, 64,575,68,65,78,46,7,3,7,3,4,5,7,6,7,4,5,6,7,8,6,7,3,6,7,3,4,673,45,6,6]);