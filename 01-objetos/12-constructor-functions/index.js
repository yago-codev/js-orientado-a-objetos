// constructor functions = funções construtoras
function FuncaoConstrutora(nome, idade) {
  this.nome = nome
  this.idade = idade
  this.dizerNome = () => console.log(`Oi, meu nome é ${this.nome}`)
}

let pessoa1 = new FuncaoConstrutora('Yago', 28)
console.log(pessoa1)
console.log(pessoa1.nome)

let pessoa2 = new FuncaoConstrutora('Raianna', 25)
console.log(pessoa2)
console.log(pessoa2.nome)