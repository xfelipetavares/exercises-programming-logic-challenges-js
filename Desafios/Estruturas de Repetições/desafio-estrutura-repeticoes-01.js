/*

01 - Mensagem codificada 

Escreva um algoritmo que recebe uma string e retorne outra string com o index dos respectivos caracteres multiplicado por 3.

Exemplo:
---------
Entrada:
"Trybe"

Saída:
"036912".
---------

*/

function encode(string){
  let result = ``

  for(let i = 0; i < string.length; i++){
    result = result + i * 3
  }
  
  return result
}

module.exports = encode;
