const animais = document.getElementById('animais');
console.log(animais);

const gridSection = document.getElementsByClassName('grid-section');

console.log(gridSection[1]);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno)

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg[0]);

const gridSectionHTML = document.getElementsByClassName('.grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section');

// console.log(gridSectionHTML[0]);
// console.log(gridSectionNode[0]);

gridSectionNode.forEach(function(item, index){
  console.log(item);
});

const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(function(item) {
  console.log(item);
})