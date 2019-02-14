const quaseArray = {0: 'Rafael', 1: 'Bia', 2:'Gabriel'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function () { return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Rafael', 'Bia', 'Gabriel']
console.log(meuArray[1])