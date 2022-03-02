const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

const primeiroh2 = document.querySelector('h2');
const h2left = primeiroh2.offsetLeft;

const h2rect = primeiroh2.getBoundingClientRect();

console.log(h2rect.top);

if(h2rect.top < 0 ) {
  console.log('Passou do elemnto');
}

console.log(
  window.innerWidth,
  window.innerHeight,
  window.outerWidth,
  window.outerHeight,

  window.pageYOffset,
  window.pageXOffset,
);

const small = window.matchMedia('(max-width: 600px)').matches;

if(small) {
  console.log('Usuário mobile');
} else {
  console.log('Usuário desktop');
}

