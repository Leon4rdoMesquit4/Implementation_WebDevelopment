const calculadora = require('../calculadora/calculadora')

function indexView(req, res){
    res.render('index.html');
};

function somar(req, res) {
    let n1 = Number.parseInt(req.body.n1);
    let n2 = Number.parseInt(req.body.n2);
    res.send(`${n1} + ${n2} = ${calculadora.somar(n1, n2)}`);
}

function subtrair(req, res) {
    let n1 = Number.parseInt(req.body.n1);
    let n2 = Number.parseInt(req.body.n2);
    res.send(`${n1} - ${n2} = ${calculadora.subtrair(n1, n2)}`);
}

function dividir(req, res) {
    let n1 = Number.parseInt(req.body.n1);
    let n2 = Number.parseInt(req.body.n2);
    res.send(`${n1} / ${n2} = ${calculadora.dividir(n1, n2)}`);
}

function multiplicar(req, res) {
    let n1 = Number.parseInt(req.body.n1);
    let n2 = Number.parseInt(req.body.n2);
    res.send(`${n1} * ${n2} = ${calculadora.multiplicar(n1, n2)}`);
}

module.exports = {
    indexView,
    somar, 
    multiplicar,
    dividir,
    subtrair
}