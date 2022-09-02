/*

16 - Imprima a idade em ordem crescente

Escreva um algoritmo que recebe a idade de Marina, Silvia e Iza e retorne uma string com as idades em ordem crescente.

Por exemplo:
-------------
Entrada:
21, 20, 19

Saída:
"19, 20, 21"
-------------

*/

function sortAgeAsc(mariaAge, silviaAge, izaAge) {
    let names = [mariaAge, silviaAge, izaAge];
    let maisNova = names[0];
    let result;
    for (let i = 0; i < names.length; i++) {
        if (names[i] < maisNova) {
            maisNova = names[i];
        }
    }
    for(let i = 0; i < names.length; i++){
      if(names[i] ){
        maisNova = `${maisNova}, ${names[i]}`
      }
    }
}

module.exports = sortAgeAsc;
