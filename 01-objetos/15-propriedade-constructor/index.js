// quando um objeto é criado, uma propriedade chamada 'constructor' é adicionada a ele.
// a propriedade 'constructor' contem a referencia de como o objeto foi criado.
function criarArvore(especie, temFruto) {
  return {
    especie: especie,
    temFruto: temFruto
  }
}

let laranjeira = criarArvore('Laranjeira', true)
console.log(laranjeira)
console.log(laranjeira.constructor) // Function: Object ... Função que retorna um objeto

function Heroi(nome, classe) {
  this.nome = nome
  this.classe = classe
}

let jaspion = new Heroi('Jaspion', 'robô')
console.log(jaspion)
console.log(jaspion.constructor) // Function: Heroi ... Função de um tipo específico, com seus atributos e métodos

let obj = {
  teste: 'teste'
}
console.log(obj)
console.log(obj.constructor) // Function: Object ... Função que retorna um objeto