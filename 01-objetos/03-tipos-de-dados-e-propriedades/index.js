let maquina = {
  material: 'Aco inox',
  equipamentos: ['motor', 'freio', 'esteira', 'cilindro'],
  vaiMontada: false,
  numeroDeMotores: 1, 
}
console.log(maquina)
console.log(maquina.material)
console.log(maquina.equipamentos[2])
console.log(maquina.equipamentos)

maquina.equipamentos.map(equipamento => console.log(equipamento))