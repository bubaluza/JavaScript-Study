function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.2
    }
}

console.log(criarProduto('tenis', 10,00))