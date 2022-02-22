// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var copasBrasil = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, 'O Brasil ganhou a copa de ${ano}' 
for (var i = 0; i < copasBrasil.length; i++) {
  console.log(`O brasil ganhou a copa de ${copasBrasil[i]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (var i = 0; i <= frutas.length; i++) {
  console.log(frutas[i]);
  if(frutas[i] === 'Pera') {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma array.

var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);