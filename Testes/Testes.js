const contador = 1;

if (contador == 1) {
    const pi = 3.1415;
    console.log(pi);
}

let variableName = 'Teacher';
console.log(variableName);

variableName = 'T';
console.log(variableName);


function teacherTeaching(a, b) {
    if (typeof a == String || typeof b == String){
        console.log(typeof a);
        return 'ERROR';
    } else {
        let sum = a + b;
        return sum;
    }
}

function sum(...args){
    let sum = 0;
    for (let arg of args){
        sum+=arg
    }
    return sum;
}

console.log(sum(4, 5, 78, 8, 5, 4));

console.log(name1);
var name1 = 'xpt0';

const resultOfTheSum = teacherTeaching('Cachorro', 3);
console.log(resultOfTheSum);

console.log(teacherTeaching('1', 1));

let text = String('My name is Leo');
console.log(text.length);

let numb = BigInt(8683731111234567890098765432123456789098765432123456789098765432122126543123456789876543212345678909876543213456789023612345678901234567890789876543435678976543245689787654323456789098765434335798765456787545678987654468789879789797897284623976545345);

console.log(numb);
console.log(teacherTeaching(numb, numb));
console.log(`Meu numero foi o ${numb + numb}`);

let boooool = true;
console.log(boooool);

let nuull = null;
console.log(nuull);

let Undeifined = undefined;
console.log(Undeifined);
