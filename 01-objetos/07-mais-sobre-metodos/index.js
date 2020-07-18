let pessoa = {
  nome: 'Yago',
  idade: 16,
  falar() {
    console.log('Oi, eu sou o Yago')
  },
  aniversario() {
    this.idade += 1
  },
  dizerIdade() {
    console.log(`A minha idade e ${this.idade}`)
  },
  podeDirigir() {
    if (this.idade >= 18) {
      console.log('Sim, voce pode dirigir')
    } else {
      console.log('Nao, voce nao pode dirigir')
    }
  }
}
console.log(pessoa.idade)
pessoa.aniversario()
console.log(pessoa.idade)
pessoa.dizerIdade()
pessoa.podeDirigir()

let calculadora = {
  numeros: 0,
  somar(a, b) {
    console.log(this.numeros = a + b)
  },
  subtratrair(a, b) {
    console.log(this.numeros = a - b)
  }
}
calculadora.somar(3, 2)
calculadora.subtratrair(5, 1)