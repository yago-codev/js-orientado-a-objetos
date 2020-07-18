// as propriedades podem ser declaradas com mais de uma palavra, separadas por espacos em branco.
// esse modo de declaracao de propriedades nao e muito utilizado, mas existe
// para podermos declarar propriedades com palavras separadas por espacos em branco, 
// deveremos declarar-las entre aspas:
let cavalo = {
  patas: 4,
  'esta domesticado': false,
  estaDomesticado: true
}
console.log(cavalo)
console.log(cavalo['esta domesticado'])
console.log(cavalo.estaDomesticado)