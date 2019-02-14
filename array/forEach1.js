const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, indice, array, x) {
    console.log(`${indice+1}) ${nome}`)
    console.log(array)  //array inteira
    console.log(x)      // undefined
});

aprovados.forEach(nome => console.log(nome))

const exibirAprovado = aprovado => console.log(aprovado)

aprovados.forEach(exibirAprovado)