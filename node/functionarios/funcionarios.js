const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response =>{
    const funcionarios = response.data
    menorSalario = {salario: 99999999999}
   // console.log(funcionarios)
    const isChina = array => array.pais == 'China'
    const isMulher = array => array.genero == 'F'

    funcionarios.filter(isChina).filter(isMulher).forEach(function (obj) {
        if(obj.salario < menorSalario.salario){
            menorSalario = obj
        }
    })
    console.log(menorSalario)
})

// mulher chinesa com menor salario