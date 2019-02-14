Array.prototype.reduce2 = function (callback) {
    let acumulador = this[0]
    for(let i=1; i<this.length-1; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true }
]


const takeBolsista = array => array.bolsista
console.log(alunos.map(takeBolsista))

const todosBolsista = (acumulador, atual) => acumulador && atual
const algumBolsista = (acumulador, atual) => acumulador || atual
console.log(alunos.map(takeBolsista).reduce2(todosBolsista))
console.log(alunos.map(takeBolsista).reduce2(algumBolsista))