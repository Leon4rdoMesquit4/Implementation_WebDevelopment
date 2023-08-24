// const numer = 45.54;
// const numer2 = 45;
// const numer3 = 45.0;
// const string1 = String("dsfdgfgf");

// console.log(numer2 == numer3);
// console.log(numer2 === numer3);
// console.log(numer2 != numer3);
// console.log(numer2 !== numer3);
// console.log(numer == numer2);
// console.log(numer === numer2);
// console.log(numer != numer2);
// console.log(numer !== numer2);
// console.log(numer === string1);
// console.log(numer !== string1);
// console.log(numer != string1);
// console.log(numer === string1);
// console.log(numer !== string1);
// console.log(numer != string1);

// const hora = 4;
// let cumprimento = "";

// if(hora < 12 && hora >= 6){
//     cumprimento = "Bom dia";
// } else if (hora < 18 && hora >= 12){
//     cumprimento = "Boa tarde";
// } else{
//     cumprimento = "Boa noite"
// }

// console.log(cumprimento);


// const diaDaSemana = 40 ;
// let nomeDiaSemana = "";

// switch (diaDaSemana) {
//     case 0:
//         nomeDiaSemana = "Domingo";
//         break;
//     case 1: 
//         nomeDiaSemana = "Segunda";
//         break;
//     case 2:
//         nomeDiaSemana = "Terça";
//         break;
//     case 3:
//         nomeDiaSemana = "Quarta";
//         break;
//     case 4:
//         nomeDiaSemana = "Quinta";
//         break;
//     case 5:
//         nomeDiaSemana = "Sexta";
//         break;
//     case 6:
//         nomeDiaSemana = "Sabado";
//         break;
//     default:
//         nomeDiaSemana = "Tu não ta na terra não, Bro!";
//         break;

// }

// console.log(nomeDiaSemana);


// const nomeDiasSemana = [
//     "Domingo","Segunda",
//     "Terça","Quarta",
//     "Quinta","Sexta",
//     "Sabado"
// ];

// for(let index = 0; index < 7; index++){
//     nomeDiaSemana = nomeDiasSemana[index];
//     console.log(nomeDiaSemana);
// }

// for (const key in nomeDiasSemana){
//     const elemento = nomeDiasSemana[key];
//     console.log(`${key} - ${elemento}`);
// }


// const carro = {
//     modelo: "Opala",
//     ano: 1986,
//     cor: "Preto"
// }

// for (const key in carro) {
//     const elemento = carro[key];
//     console.log(`${key} - ${elemento}`)
// }


// let i = 0;

// while (i < 7) {
//     console.log(nomeDiasSemana[i]);
//     i++;
// }



// do {
//     if (nomeDiasSemana[i] != undefined) {
//         console.log(nomeDiasSemana[i]);
//     }
//     i++;
// } while (i < 7);


// function nomeDaFuncao(){
//     let algumaCoisa = "Cachaça é horrível";
//     return algumaCoisa;
// }

// function funcao(algumaCoisa){
//     return algumaCoisa;
// }

// console.log(funcao("Dez mariscos"));
// console.log(nomeDaFuncao());


// const calculadora = {
//     somar: function(n1, n2) {
//         return n1 + n2;
//     },
//     multiplicar: function(n1, n2){
//         return n1 * n2;
//     }
// }

// console.log(calculadora.multiplicar(2, 3));


// const soma = new Function('a', 'b', 'let x = 10; let resultado = x + b + a; return resultado;');
// let resultado = soma(4, 5);
// console.log(resultado)

// let a = "";

// const calculadora = {
//     reducing: new Function("array", `return array.reduce((p, c) => p ${a} c)`),
//     somar: function(n) {
//         a = "+";
//         return reducing(n);
//     },
//     multiplicar: function(n1, n2){
//         a = "*";
//         return reducing(n)
//     },
//     dividir: function(n1, n2){
//         a = "/";
//         return reducing(n)
//     },
//     subtrair: function(n1, n2){
//         a = "-";
//         return reducing(n)
//     }
// }

// console.log(calculadora.multiplicar(2, 3));




let reducing = new Function("array", `return array.reduce((p, c) => p ${a} c)`)

const calculadora = {
    reduc: function(array){
        return reducing(array);
    },
    somar: function(array) {
        return this.reducing(array);
    },
    multiplicar: function(array){
        a = "*";
        return this.reducing(array);
    },
    dividir: function(array){
        a = "/";
        return this.reducing(array);
    },
    subtrair: function(array){
        a = "-";
        return this.reducing(array);
    }
}

console.log(calculadora.reduc([2, 3]));