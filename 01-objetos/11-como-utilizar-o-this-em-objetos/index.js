// a palavra this quando utilizada dentro de objetos sempre 
// irá se referir a própria instância do objeto
let ninja = {
  classe: 'profissional',
  arma: 'pedra',
  atirarArma() {
    console.log(`Atirou a ${this.arma}`)
  },
  atirarDuasVezes() {
    for (let i = 2; i > 0; i--) {
      this.atirarArma()
    }
  }
}

ninja.atirarDuasVezes()

let ninja2 = {
  classe: 'profissional',
  arma: 'espada',
  atirarArma() {
    console.log(`Atirou a ${this.arma}`)
  }
}