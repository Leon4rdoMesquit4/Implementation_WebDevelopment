const op = {
    sum: 0,
    sub: 1,
    div: 2,
    mult: 3
};

// const a = 90;
// const b = 80;
// const sum = a + b;
// const sub = a - b;
// const div = a / b ;
// const mult = a * b;

// console.log(`Resultado da operação soma: ${a} + ${b} = ${sum}`);
// console.log(`Resultado da operação subtração: ${a} - ${b} = ${sub}`);
// console.log(`Resultado da operação divição: ${a} / ${b} = ${div}`);
// console.log(`Resultado da operação multiplicação: ${a} * ${b} = ${mult}`);

function mathematicOperation(a, b, operation){
    let text = 'Resultado da operação '
    let result = 0
    switch (operation){
        case op.sum:
            result = a + b;
            text = text + 'soma: '
            break;
        case op.sub:
            result = a - b;
            text = text + 'soma: '
            break;
        case op.mult:
            result = a * b;
            text = text + 'soma: '
            break;
        case op.div:
            result = a / b;
            text = text + 'soma: '
            break;
        default:
            break;
    }
    return text + a + b + result;
}

let mathResult = mathematicOperation(120, 50, op.sub)
mathResult = mathematicOperation(120, 50, op.sum)
console.log(mathResult)

