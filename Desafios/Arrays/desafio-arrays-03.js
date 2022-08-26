/*

03 - Encontre uma pessoa convidada em uma lista de nomes

Escreva um algoritmo que recebe um array de nomes quaisquer e o nome da pessoa convida a ser encontrada. 

Se encontrar o nome na lista retorne:
-----------------------
"O nome está na lista."
-----------------------

Caso o contrário:
---------------------------
"O nome não está na lista."
---------------------------

*/

function findGuest(names, guest){
  let convidado = guest
  let result = false
  
  for(let j = 0; j < names.length; j++){
    if(names[j] == guest){
      result = true
    }
  }
  if(result == true){
    return `${guest} está na lista.`
  } else {
    return `${guest} não está na lista.`
  }
  
}

module.exports = findGuest([`fran`, `joao`, 'Bruna', 'Joaquim', 'Julia', 'Amanda', `felipe`], `felipe`);
