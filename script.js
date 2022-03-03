const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('.animais-lista');

console.log(h1.innerHTML);
console.log(h1.outerHTML);

// h1.outerHTML = '<p>Novo Título </p>';
//console.log(animaisLista.innerHTML);

const lista = document.querySelector('.animais-lista');

console.log(lista.children[--lista.children.lenght]);
console.log(lista.querySelector('li:last-child'));

console.log(lista.previousSibling);