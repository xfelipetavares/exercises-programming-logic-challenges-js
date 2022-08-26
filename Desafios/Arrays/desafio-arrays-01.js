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

module.exports = getMinNumber([23, 5, 6, 4, 26, 87, 12, 62, 64,575,68,65,78,46,7,3,7,3,4,5,7,6,7,4,5,6,7,8,6,7,3,6,7,3,4,673,45,6,6]);

