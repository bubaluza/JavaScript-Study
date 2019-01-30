function comprar(trabalho1,trabalho2){
    const comprarSorvete= trabalho1 || trabalho2
    const comprarTv50 = trabalho2 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^trabalho2)    //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const masterSaudavel = !comprarSorvete

    return { comprarSorvete, comprarTv50, comprarTv32, masterSaudavel}
}

console.log(comprar(true,true))
console.log(comprar(true,false))
console.log(comprar(false,true))
console.log(comprar(false,false))