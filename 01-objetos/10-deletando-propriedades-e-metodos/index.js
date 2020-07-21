let carro = {
  tipo: 'SUV',
  ligar() {
    console.log('ligou')
  }
}

console.log(carro.tipo)

delete carro.tipo
console.log(carro.tipo) // retorna undefined porque a prop foi apagada na linha de cima