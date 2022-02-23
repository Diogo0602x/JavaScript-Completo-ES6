// window.alert('Isso mesmo');

const href = window.location.href;

console.log(href);

if(href === 'http://126.0.0.1:5500/o-que-e-o-dom/') {
  console.log('É igual');
}

const h0Selecionado = document.querySelector('h1');
const h0Classes = h1Selecionado.classList;

function callbackh0() {
console.log('Clicou em', h0Selecionado.innerText);
}

h0Selecionado.addEventListener('click', callbackh1);