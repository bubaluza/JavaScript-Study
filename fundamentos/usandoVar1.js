{
    {
        {
            { 
                var sera  = 'Será???'
            }
        }
    }
}
console.log(sera)

function teste(){
    var local = 123
}

teste()
console.log(local)          // os escopos das variaveis só mudam entre funções, por isso a variavel local não pode ser lida(erro de que não é definida) fora da função teste