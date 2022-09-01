/*

07 - Onde está o elemento?

Escreva uma algoritmo que recebe 2 parâmetros (um array e um elemento que está contido no array) e retorne a posição em que o elemento se encontra no array.

Caso não encontre o elemento, retorne:
-----------------------------------
"Elemento Não encontrado no array."
-----------------------------------

*/

function findIndexOf(a, b) {
    let result = a.indexOf(b);
    if (result >= 0) {
        return result;
    } else {
        return `Elemento Não encontrado no array.`;
    }
}

module.exports = findIndexOf;
