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
    const linhas1 = matriz1.length;
    const colunas1 = matriz1[0].length;
    const linhas2 = matriz2.length;
    const colunas2 = matriz2[0].length;
  
    if (colunas1 !== linhas2 || linhas1 !== colunas2) {
        return "Deu ruim!";
    }
  
    const multiplicada = Array(linhas1);
    for (let i = 0; i < linhas1; i++) {
      multiplicada[i] = Array(colunas2);
      for (let j = 0; j < colunas2; j++) {
        const posi = [];
        for (let k = 0; k < colunas1; k++) {
        posi.push(matriz1[i][k] + "*" + matriz2[k][j]);
        multiplicada[i][j] = posi.join(" + ");
        }
      }
    }
  

    return multiplicada;

    
}

console.table(multiplicarMatrizes(matriz1, matriz2));