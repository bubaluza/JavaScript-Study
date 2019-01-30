// novo recurso es2015

const pessoa ={
    nome: 'Ana',
    idade: 5,
    endereço: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade} = pessoa
console.log( nome, idade)

const {nome: n, idade: i} = pessoa 
console.log(n,i)

const{ sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereço: {logradouro , numero, cep} } = pessoa 

console.log(logradouro, numero, cep)

const { conta : { ag, num}} = pessoa            // vai da errado pois conta não existe
console.log(ag, num)

