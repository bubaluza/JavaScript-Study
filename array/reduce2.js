const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsistas?

// Desafio 2: Algum aluno é bolsista?
const takeBolsista = array => array.bolsista
console.log(alunos.map(takeBolsista))

const todosBolsista = (acumulador, atual) => acumulador && atual
const algumBolsista = (acumulador, atual) => acumulador || atual
console.log(alunos.map(takeBolsista).reduce(todosBolsista))
console.log(alunos.map(takeBolsista).reduce(algumBolsista))