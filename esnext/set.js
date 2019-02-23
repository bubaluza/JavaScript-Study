// não aceita repetição/não indexada

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
console.log(times)
console.log(times.size)
console.log(times.has('vasco'))