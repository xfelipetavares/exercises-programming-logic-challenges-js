/*

06 - Retorne os números ímpares

A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.

Crie um algoritmo que retorne uma string com todos os números inteiros ímpares desse intervalo.

Use a seguinte estrutura no retorno:
----------------
"x, y, z, ...n."
----------------

*/

function oddNumbers() {
    let result = `1`;
    for (let i = 2; i <= 50; i++) {
        if (i % 2 != 0) {
            result = `${result}, ${i}`;
        }
    }
    console.log(result);
    return `${result}.`;
}

module.exports = oddNumbers;
