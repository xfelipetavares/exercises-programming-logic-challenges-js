/*

02 - Contar até 10

Maria está aprendendo lógica de programação e recebeu o seguinte código:

  let limit = 10
	let accumulator = 1;
	while(contador <= limit){
		accumulator = accumulator + 1;
}

Considerando a mesma lógica, escreva um algoritmo que irá somar todos números de 1 até o limite usando o For em vez de while e o retorne.

*/

function accumulator(limit){
  let accumulator = 0
  let contador = 1
	for(contador; contador <= limit; contador++){
		accumulator = accumulator + contador
  }
  return accumulator
}

module.exports = accumulator;
