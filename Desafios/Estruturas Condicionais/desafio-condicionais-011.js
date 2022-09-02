/*
 
 11 - Triplica vogais

 Escreva um algoritmo que recebe uma string (frase ou palavra) e retorne uma outra string com as vogais "triplicadas".
 
 Por exemplo:
 ------------
 Entrada:
 "Camelo"

 Saída:
 "Caaameeelooo"
 --------------
 
 */

function triVowels(word) {
    let result = ``;
    for (let i = 0; i < word.length; i++) {
        switch (word[i]) {
            case `a`:
            case `e`:
            case `i`:
            case `o`:
            case `u`:
                result += word[i].repeat(3);
                break;
            default:
                result += word[i];
                break;
        }
    }
    return result;
}

module.exports = triVowels;
