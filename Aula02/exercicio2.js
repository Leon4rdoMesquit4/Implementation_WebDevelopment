/* Desafio 02
"Bora trabaiá ôta vez”
Faça um algoritmo de multiplicação de matrizes: A x B = C;
É primordial que o número de colunas da primeira matriz seja igual ao número
de linhas da segunda matriz. Se for diferente, o algoritmo deve informar “Não é
possível calcular”;
*/

let matriz1 = [[1, 3],
               [2, 5]];
let matriz2 = [[2, 2],
               [0, 1]];

function multiplicarMatrizes(matriz1, matriz2){
    let multiplicada = [];

    for(let i = 0; i < matriz1.length; i++){
        let linha = [];
        for(let j = 0; j < matriz1[i].length; j++){
            if(matriz1[i].length != matriz2[j].length){
                console.log("Não é possível calcular")
                return "ERRO";
            } else{
                linha.push(matriz1[i][j] * matriz2[j][i]);
            }
        }
        multiplicada.push(linha);
    }

    return multiplicada;

    
}

console.table(multiplicarMatrizes(matriz1, matriz2));