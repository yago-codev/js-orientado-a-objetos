// através do operador 'instanceof' poderemos saber de qual instância (pai) um determinado objeto vem.
// é mais prático do que utilizar o 'constructor'
function retornaObjeto(valor) {
  return {
    prop: valor
  }
}

function funcaoConstrutora(valor) {
  this.prop = valor
}

const Obj1 = retornaObjeto('valorDaProp')
const Obj2 = new funcaoConstrutora('valorDaProp')

console.log(Obj1 instanceof retornaObjeto) // false
console.log(Obj1 instanceof Object) // true
console.log(Obj2 instanceof Object) // true
console.log(Obj2 instanceof funcaoConstrutora) // true