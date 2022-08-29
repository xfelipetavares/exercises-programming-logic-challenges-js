/*

03 - Mostre a classe do aventureiro

A Trybe tem um grupo de aventureiros. 

Quando o nome de algum é invocado, a classe a qual essa pessoa faz parte é apresentada.

Escreva um algoritmo que recebe o nome de um aventureiro e, de acordo com este nome, retorna o nome da sua classe conforme tabela baixo:

|  Aventureiro  |       Classe        |

|   Tunico      |  Mestre dos Magos   |
|   Cremoso     |  Cavaleiro Negro    |
|   Gordinho    |  Pirata             |
|   Lobo        |  Solitário Samurai  |
|   Ousado      |  Mago               |
|   Anjo        |  Loiro Clérigo      |

Caso o nome informado não faça parte do esquadrão, retorne:
----------------------------
"Aventureiro não encontrado"
----------------------------

 */

function findAdventurous(adventurous) {
    switch (adventurous) {
        case `Tunico`:
            return `Mestre dos Magos`;
            break;
        case `Cremoso`:
            return `Cavaleiro Negro`;
            break;
        case `Gordinho`:
            return `Pirata`;
            break;
        case `Lobo Solitário`:
            return `Samurai`;
            break;
        case `Ousado`:
            return `Mago`;
            break;
        case `Anjo Loiro`:
            return `Clérigo`;
            break;

        default:
            return "Aventureiro não encontrado";
            break;
    }
}

module.exports = findAdventurous;
