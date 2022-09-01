/*
08 - Ordem decrescente

Escreva um algoritmo que retorne uma string com os números inteiros do intervalo de 100 a 200 em ordem decrescente.

Exemplo de saída:
-------------
x, y, z ...n.
-------------
*/

function sortDec(){
  let result = `200`
  for(let i = 199;i >= 100; i--){
    result = `${result}, ${i}`
  }
  return `${result}.`
}

module.exports = sortDec;
