/*

03 - Calcular a soma de 1 até 1000

Escreva um algoritmo que calcule a soma de 1 a 1000 usando a estrutura "for" e retorne no formato:
--------------------------
"A soma de 1 a 1000 é: x."
--------------------------

*/

function accumulatorThousand(){
  let result = 0

  for(let i = 0; i <= 1000; i++ ){
    result = result + i
  }
  return `A soma de 1 até 1000 é ${result}.`
}

module.exports = accumulatorThousand;
