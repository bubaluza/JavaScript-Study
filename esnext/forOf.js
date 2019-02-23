for(let letra of 'Cod3r'){
    console.log(letra)
}

const assuntosEcm = ['Map', 'Set', 'Promise']

for(let i in assuntosEcm){
    console.log(i)
}

for(let assunto of assuntosEcm){
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', {abordado:true}],
    ['Set', {abordado:true}],
    ['Promise', {abordado:false}]
])

for(let assunto of assuntosMap){
    console.log(assunto)
}

for(let chave of assuntosMap.keys()){
    console.log(chave)
}

for(let valor of assuntosMap.values()){
    console.log(valor)
}

for(let [ch, vl] of assuntosMap.entries()){
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for(let letra of s){
    console.log(letra)
}