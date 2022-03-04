<<<<<<< HEAD
const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

if(tabMenu.length && tabContent.length) {
  tabContent[0].classList.add('ativo');

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo');
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      activeTab(index);
    });
  });
}
=======
// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq');
const primeiroDt = faq.querySelector('dt');


// Selecione o DD referente ao primeiro DT
const proximoDD = primeiroDt.nextElementSibling;

console.log(proximoDD);

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML;
>>>>>>> fde5195e824e98d3d629647adb262f0bb0fa10aa
