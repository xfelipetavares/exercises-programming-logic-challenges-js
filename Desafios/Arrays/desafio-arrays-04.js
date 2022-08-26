/*

04 - Verifique se todos os dados de uma lista são do mesmo tipo

Escreva uma algoritmo que recebe um array de dados quaisquer e verifique se todos são do mesmo tipo.

Se todos forem retorne:
------
true
------

Caso contrário:
-------
false
-------

Obs: Os retornos tem que ser dados do tipo boolean.

*/

function dataType(types) {
    let result = true;
    let compara = typeof types[0];
    let i = 1;

    for (i; i < types.length; i++) {
        if (typeof types[i] == compara) {
        } else {
            result = false;
        }
    }

    return result;
}

module.exports = dataType(["Daniel", "Marcos", "Daniel", "Marcos"]);
