const calculadora = require('../calculadora/calculadora')

function indexView(req, res){
    res.render('index.html');
};

function resultadoView(n1, n2, operador, resultado, res){
    res.render('calculo.html', {n1, n2, operador, resultado, indexView});
}

function resultadoCalculo(req, res) {
    const {n1, n2, operador} = req.body

    const nu1 = Number.parseInt(n1);
    const nu2 = Number.parseInt(n2);
    
    if(isNaN(nu1) || isNaN(nu2)){
        res.send('O que você digitou talvez não seja um número, tente de novo!');
    } else {
        if (operador === "+") resultadoView(nu1, nu2, operador, calculadora.somar(nu1, nu2), res)
        if (operador === "-") resultadoView(nu1, nu2, operador, calculadora.subtrair(nu1, nu2), res)
        if (operador === "*") resultadoView(nu1, nu2, operador, calculadora.multiplicar(nu1, nu2), res)
        if (operador === "/") resultadoView(nu1, nu2, operador, calculadora.dividir(nu1, nu2), res)
    }

}



module.exports = {
    indexView,
    resultadoCalculo
}