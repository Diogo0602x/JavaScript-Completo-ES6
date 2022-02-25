// Mostre no console cada parágrafo do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);

paragrafos.forEach((item) => {
  console.log(item);
})

// Mosstre o texto dos parágrafos no console
paragrafos.forEach((item) => {
  console.log(item.innerText);
})


// COmo corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);