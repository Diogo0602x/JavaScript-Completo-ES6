var numero = 20;
var numero2 = 10;

numero += 10; // numero = numero + numero2
console.log(numero);
console.log(numero2);

var idade = 20;
var naoPossuiDiabetes = true;

var podeBeber;
podeBeber = (idade >= 18 && naoPossuiDiabetes) ?'Pode beber' : "não pode beber";

console.log(podeBeber);

var possuiFaculdade = true;
if(possuiFaculdade)
  console.log('Sim possui');
else
  console.log('Isso mesmo');