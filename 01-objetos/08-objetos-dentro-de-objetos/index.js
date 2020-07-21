let pessoa = {
  nome: "Yago",
  idade: 28,
  falar() {
    console.log(`Oi, meu nome é ${this.nome}`)
  },
  aniversario() {
    this.idade += 1
  },
  dizerIdade() {
    console.log(`À minha idade é ${this.idade}`)
  },
  podeDirigir() {
    if (this.idade >= 18) {
      console.log('Sim, você pode dirigir')
    } else {
      console.log('Não, você não pode dirigir')
    }
  },
  caracteristicas: {
    cnh: true,
    carteira: [ 'foto 3x4', 'documentos', 'moedas' ]
  }
}

console.log(pessoa.caracteristicas.carteira)
console.log(pessoa.caracteristicas.carteira[1])