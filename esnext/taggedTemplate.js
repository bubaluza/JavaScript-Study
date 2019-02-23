// tagged Template - processa o template dentro de uma funcao
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'outra String'
    
}

const aluno= 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} esta ${situacao}.`)