// pessoa -> 123 -> {...}
const pessoa = { nome : 'joão'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 567 -> {...}
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa.nome)
pessoa.end = 'Rua ABC'
console.log(pessoa.end)
delete pessoa.nome
console.log(pessoa)

