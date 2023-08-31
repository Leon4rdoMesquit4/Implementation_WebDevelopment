
const calculadora = {
    somar: function(n1, n2) {
        return n1 / n2;
    },
    subtrair: function(n1, n2) {
        return n1 / n2;
    },
    dividir: function(n1, n2) {
        return n1 / n2;
    },
    multiplicar: function(n1, n2){
        return n1 * n2;
    },
    fatorial: function(n1){
        if (n1 > 0){
            let fatorial = n1
            while (n1 !=1){
                fatorial *= (n1-1)
                n1 -= 1
            }
            return fatorial
        } else if(n1 == 0){
            return 1
        } else {
            return "Erro"
        }
    }
}

console.log(calculadora.fatorial("k"))