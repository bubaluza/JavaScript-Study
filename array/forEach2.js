const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

Array.prototype.forEach2 = function(callback){
    for(let i = 0 ; i < this.length;i++){
        callback(this[i],i, this)
    }
}







aprovados.forEach2(function (nome, indice, array, x) {
    console.log(`${indice+1}) ${nome}`)
   // console.log(array)  //array inteira
   // console.log(x)      // undefined
});