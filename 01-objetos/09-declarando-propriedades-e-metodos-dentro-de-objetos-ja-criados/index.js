// objetos NÃO são imutáveis, 
// eles podem ganhar e propriedades e métodos ao longo do código...
let carro = {
  tipo: 'SUV'
}

// criando propriedade dinamicamente:
carro.portas = 4
console.log(carro.portas)

// criando propriedade baseado em uma condição do objeto:
if (carro.tipo === 'SUV') {
  carro.tetoSolar = true
}
console.log(carro.tetoSolar)

// criando metodos dinamicamente:
carro.acelerar = () => console.log('vruuummmmm')
carro.acelerar()