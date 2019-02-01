function Pessoa (nome){
    this.nome = nome

    this.falar = function(){
        console.log(`Meu nome é ${nome}`)
    }
}

const pes1 = new Pessoa('João')
pes1.falar()
console.log(pes1.nome)