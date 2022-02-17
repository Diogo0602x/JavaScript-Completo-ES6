// Crie uma função para verificar se um valor é Truthy
function isTruthy(valor){
  return !!valor;
  console.log(!!valor);
}

// Crie uma função matemática que retonre o preímetro de um  quadrado
// lembrando: preímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
  return lado * 4;
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `Meu nome é ${nome} ${sobrenome}`;
}

//Crie uma função que verifica se um número é 
function isEven(par) {
  if(par % 2 === 0) {
    return 'O núemro é par';
  } else {
    return 'O número é impar';
  }
}

// Crie uma função que retorne o tipo de 
// dado do argumento passado nela (typeof)

function tipoDeDado(dado) {
  return typeof dado;
}

// addEventListener é uma função nativa do Javascript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer
addEventListener('click', function(){
  console.log('Diogo Sales Teixeira');
})

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar `;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

precisoVisitar(20);
jaVisitei(20);