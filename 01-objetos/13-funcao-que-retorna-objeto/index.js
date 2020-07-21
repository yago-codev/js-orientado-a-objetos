// funções que retornam objetos são parecidas com funções construtoras, 
// com a pequena diferença de que retornaremos os objetos através do 'return', sem utilizar o 'new'
function criarCarro(modelo, portas, aro, tetoSolar) {
  return {
    modeloDoCarro: modelo,
    portas: portas,
    aro: aro,
    tetoSolar: tetoSolar,
    ligarCarro() {
      console.log('Ligou')
    },
    temTetoSolar() {
      if (this.tetoSolar === true) {
        console.log('Tem teto solar')
      } else {
        console.log('Não tem teto solar')
      }
    }
  }
}

let ferrari = criarCarro('Ferrari', 4, 18, true)
console.log(ferrari)
ferrari.ligarCarro()
ferrari.temTetoSolar()

let bmw = criarCarro('BMW', 4, 20, true)
console.log(bmw)