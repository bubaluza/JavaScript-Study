Array.prototype.map2 = function (callback) {
    array1 = []
    for(i=0; i<this.length;i++) {
        array1.push(callback(this[i], i, this))
    }
    return array1
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de lápis", "preco": 41.22 }',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços
let precos = carrinho.map2(JSON.parse).map2(function (obj ) {
    return obj.preco
})

console.log(precos)