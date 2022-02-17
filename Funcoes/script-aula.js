function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(10));

function pi() {
  return 3.14;
}

var total = 5 * pi(); //15.7

console.log(pi());

function imc(peso, altura){
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(80, 1.8));

function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Eu gosto do céu';
  } else if (cor == 'verde') {
    return 'Eu gosto de floresta';
  } else {
    return 'Eu gosto de preto';
  }
}

function mostraConsole() {
  console.log('Oi')
}

addEventListener('click', mostraConsole);

function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

imc2(20, 1.8); // undefined
console.log(imc2(1000, 1.80)); // retorna o imc e undefined

function tercceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Por favor preencha um número'
  } else if(idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(tercceiraIdade('oi'));

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Faltam visita ${totalPaises - paisesVisitados} países`
}

console.log(totalPaises);

var profissao = 'Programador';

function dados() {
  var nome = 'Diogo';
  var idade = 20;
  function outrosDados() {
    var endereco = 'Brasília';
    var idade = 20;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); //  Retorna 'Diogo, 20, Brasília, Programador'
outrosDados(); // retorna um erro