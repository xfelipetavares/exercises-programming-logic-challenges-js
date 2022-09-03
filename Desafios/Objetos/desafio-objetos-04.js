/*

04 - Quem é a pessoa mais velha?

Dado um array de pessoas, escreva um algoritmo que identifique qual tem a maior idade e retorne o nome da pessoa e sua idade.

O array terá o seguinte formato:
people = [
  { name: 'Ramon', age: 35 },
  { name: 'José', age: 28 },
  { name: 'Amanda', age: 19 }
];

O retorno deve ser no seguinte formato:
---------------------------------
"x tem a maior idade com y anos."
---------------------------------

*/

function getOldPerson(arrPeople) {
  let comparaIdade = arrPeople[0].age
  let nome = arrPeople[0].name
  for(let i = 1; i < arrPeople.length; i++){
    if(arrPeople[i].age > comparaIdade){
      comparaIdade = arrPeople[i].age
      nome = arrPeople[i].name
    }
  }
  return `${nome} tem a maior idade com ${comparaIdade} anos.`
}

module.exports = getOldPerson;
