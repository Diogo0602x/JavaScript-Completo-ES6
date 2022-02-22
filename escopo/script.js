// Por qual motivo o código abaixo retorna com erros?
{
 let cor = 'preto';
 const marca = 'Fiat';
 const portas = 4;
 console.log(cor, marca, portas);
}


// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}

console.log(somarDois(10));
console.log(dividirDois(10));


// O que fazer para total retornar 500?
const numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
