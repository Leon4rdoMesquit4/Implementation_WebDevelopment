function calcImposto(a, imp = 0.2){
    return a * imp
}

console.log(calcImposto(30))
console.log(calcImposto(30, 0.5))


function incluir(...numbers){
    numbers.forEach(element => {
        console.log(element)
    })
}

incluir(1,2,3,4,5,"54", true, {nome: 'Paula'}, new Function());

const obj = [
    {
        nome: 'Leo',
        sobrenome: 'Mesquita',
        data: new Date(2003, 0, 25)
    },
    {
        nome: 'Maria',
        sobrenome: 'Silva',
        data: new Date(2013, 6, 2)
    }
]

obj.forEach((elemento) => {
    console.log(`Nome: ${elemento.nome}`)
    console.log(`Sobrenome: ${elemento.sobrenome}`)
    console.log(`Nascimento: ${elemento.data.toLocaleDateString("pt-BR")}`)
})