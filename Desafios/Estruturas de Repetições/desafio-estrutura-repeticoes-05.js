/*

05 - Números divisíveis por 3

Escreva um algoritmo que recebe o inicio e o fim de uma sequência de números inteiros de razão 1.

Conte a quantidade de números da sequência que são diviseis por 3 e considere:

Se houver 50 ou mais retorne:
---------------------------------------
"Há 50 ou mais números diviseis por 3."

Caso o contrário:
--------------------------
"Sequência muito pequena."
--------------------------

*/

function numbersDivisibleBy3(start, limit) {
    let result = 0;

    for (let i = start; i <= limit; i++) {
        if (i % 3 === 0) {
            result = result + 1;
        }
        console.log(result)

        if (result < 50) {
            return `Sequência muito pequena.`;
        } else {
            return `Há 50 ou mais números diviseis por 3.`;
        }
    }
}

module.exports = numbersDivisibleBy3;
