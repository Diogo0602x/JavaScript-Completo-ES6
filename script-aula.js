const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste');
menu.classList.remove('azul');
menu.classList.toggle('azul');

if(menu.classList.add('azuk')) {
  menu.classList.add('possui-azul');
} else {
  menu.classList.add('nao-possui-azul');
}

menu.className += ' vermelho';

//console.log(menu.className);

// console.log(menu.classList);

const animais = document.querySelector('.animais');
console.log(animais.attributes['data-texto']);

const img = document.querySelector('img');

const srcImg = img.getAttribute('alt');

img.setAttribute('alt', 'É uma raposa')
const possuiAlt = img.hasAttribute('title');
console.log(possuiAlt);

console.log(srcImg);

const carro = {
  portas: 4,
  andar: function(km) {
    console.log(`Andou ${km}`);
  }
}