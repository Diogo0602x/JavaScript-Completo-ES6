//  Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'È igual' ou 'É menor'

var minhaIdade = 20;
var idadePrimo = 19;

if(minhaIdade > idadePrimo) {
  console.log('É maior');
} else if(minhaIdade == idadePrimo) {
  console.log('É igual')
} else {
  console.log('É menor')
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Diogo'; // truthy
var idade = 20; // truthy
var possuiDoutorado = false; // false
var empregoFuturo; // false
var dinheiroNaConta = 0; // truthy

console.log(!!nome, !!idade, !!possuiDoutorado, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china) {
  console.log('Brasil possui mais habintantes que a China');
} else if(china > brasil) {
  console.log('China possui mais habitantes que o Brasil');
}

// O que irá aparecer no console?

if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?

if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}