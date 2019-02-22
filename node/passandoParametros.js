module.exports = function (... nomes) {
    return nomes.map(nome => nome === 'carlos' ? `${nome}, você ta violento cara. E ta indeciso irmão.` : `${nome}, você programa em portugues irmão`)
}