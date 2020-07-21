// as páginas web possuem um objeto global chamado 'window'
// as variáveis globais ficam atreladas a esse objeto 'window' como propriedades
// os métodos do JS podem ser invocados pela window
// o 'this' no escopo global referencia o objeto global 'window'
console.log(window)

var teste = 'teste'

console.log(window) // agora o objeto global 'window' irá retornar a variável 'teste'

console.log(this.teste) // podemos acessar a variável 'teste' através do 'this' global

function minhaFuncao() {}

console.log(window)