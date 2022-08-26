/*

02 - Calcula a raiz quadrada de um número

Escreva um algoritmo que recebe um número inteiro e calcule a sua raiz quadrada e considere os seguintes retornos:

Se a raiz for exata, ou seja, um quadrado perfeito, por exemplo a raiz quadrada de 25 é 5, retorne:
-----------------------------
"A raiz quadrada de 25 é: 5."
-----------------------------

Se a raiz não for exata, por exemplo a raiz de 30, retorne:
------------------------------------------
"Não existe raiz exata para o número 30.".
------------------------------------------

Se o valor recebido for igual a zero ou não for do tipo number, retorne:
-------------------
"Número inválido.".
-------------------

*/

function squareRoot(number){
  let raiz = Math.sqrt(number)
  let par = raiz % 2
  console.log(`é par ` + par)
  if(par == 0){
    return `A raiz quadrada de ${number} é: ${raiz}.`
  } else if(par != 0){
    return `Não existe raiz exata para o número ${number}.`
  } else if(number === 0 || number == NaN ){
    return `Número inválido.`
  }
}

module.exports = squareRoot;
