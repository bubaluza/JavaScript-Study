// Arrow function
const soma = (a, b) => a+b
console.log(soma(2,3))

    // Arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametro default
function log(texto = 'Node') {
    console.log(texto)
}

log()
log(undefined)
log(null)
log('sou mais Forte')

// operador rest
function total( ...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(1,54,6,1,2,5,6,7,3))