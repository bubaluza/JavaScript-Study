const notas = [7.7, 5.6, 8.8, 3.2, 6.7, 1.3, 1.6, 1.7,9.0]

// sem callback
let notasBaixas = []
for(let i in notas){
    if(notas[i]<7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// com callback
notasBaixas = notas.filter(function (nota){
    return nota < 7
})

console.log(notasBaixas)

notasBaixas = notas.filter(nota => nota < 7)
console.log(notasBaixas)