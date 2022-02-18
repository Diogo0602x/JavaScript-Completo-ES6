// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
var dados = {
  nome: 'Diogo',
  sobrenome: 'Sales',
  idade: 20,
  cidade: 'Brasília',
}

// Crie um método no objeto anterior, que mostre o seu nome completo
dados.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`;
}
// Modifique o valor da propriedade preçco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Lamborghini',
}

carro.preco = 3000;
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos que late ao ver um homem

var cachorro = {
  raca: 'Labrador',
  cor: 'preto',
  idade: 10,
  latir(pessoa) {
    if(pessoa === 'homem') {
      return 'Latir';
    } else {
      return 'Nada';
    }
  }
}