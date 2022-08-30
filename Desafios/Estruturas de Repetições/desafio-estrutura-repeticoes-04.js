/*

04 - Escreva um nome N vezes

Escreva um algoritmo usando a estrutura "FOR" que irá receber um nome e a quantidade de vezes que o mesmo deve ser repetido e retorná-lo.

Por exemplo:
-------------------------------
Entradas:
"João", 5

Saída:
"João, João, João, João, João."
-------------------------------

*/

function repeatName(name, quantity) {
  let result = `${name}`
  for(let i = 1; i < quantity; i++){
    result = result + `, `+`${name}`
  }
  return `${result}.`
}

module.exports = repeatName;
