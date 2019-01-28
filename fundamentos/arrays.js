const valores = [7.7, 8.2, 6.3, 9.2, 'porra', "existe"];
if(valores[5]==undefined){
    console.log("nao ta definido compadre")
}else console.log(valores[5]); 

console.log(valores.length)
console.log(valores)
valores.push( {id:3}, false, null, 1030)
console.log(valores)
console.log(valores.pop())
console.log(valores)
delete valores
console.log("espaço")
console.log(valores)