/*

02 - Jogo de fantasia- Parte 2

Além dos pontos de vida (PV), será necessário estipular o equipamento inicial do(a) personagem. 

Tudo isso deve ser feito no mesmo código, seguindo a seguinte tabela:

|   Classe     |   Pontos de Vida   |   Equipamento Inicial   |

|    Mago      |        5PV         |         Varinha         |
|   Arqueiro   |        10PV        |        Arco Curto       |
|   Guerreiro  |        15PV        |          Espada         |
|   Cavaleiro  |        20PV        |     Armadura Completa   |


Escreva um algoritmo que recebe o nome de uma classe e retorne os pontos de vida e o equipamento inicial do(a) personagem.

Por exemplo:
---------------
Entrada:
"Guerreiro"

Saída:
"15PV, Espada."
---------------

Desafio: faça sem usar estruturas condicionais (ifs ou switches).

*/

function fantasyGame2(className) {
    let classes = {
        Mago: [5,`Varinha`],
        Arqueiro: [10, `Arco Curto`],
        Guerreiro: [15, `Espada`],
        Cavaleiro: [20, `Armadura Completa`],
    };
    return `${classes[className][0]}PV, ${classes[className][1]}.`
}

module.exports = fantasyGame2;
