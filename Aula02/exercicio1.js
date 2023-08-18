//
// Versão paia
//
// let matriz = [[1, 2],
//               [3, 4],
//               [3, 4],
//               [3, 4],
//               [3, 4],
//               [5, 6]];

// function transformarEmTransposta(matrizInicial) {
//     const transposta = [];
//     for(let i = 0; i < matrizInicial[0].length; i++){
//         const linha = [];
//         for(let j = 0; j < matrizInicial.length; j++){
//             linha.push(matrizInicial[j][i])
//         };
//         transposta.push(linha)
//     };

//     return transposta;
// }

// let matrizTransposta = transformarEmTransposta(matriz);

// console.table(matrizTransposta);
// console.table(matriz);



//
//Versão inteligente (CHATGPT) 🫡
//
let matriz = [[1, 2],
              [3, 4],
              [5, 6]];

function transformarEmTransposta(matrizInicial) {
    const numeroLinhas = matrizInicial.length;
    const numeroColunas = matrizInicial[0].length;

    const transposta = Array.from({ length: numeroColunas }, (_, colunaIndex) =>
        matrizInicial.map(linha => linha[colunaIndex])
    );

    return transposta;
}

let matrizTransposta = transformarEmTransposta(matriz);

let teste = Array.from({length: 4})

console.table(teste)
// console.table(matrizTransposta);
// console.table(matriz);