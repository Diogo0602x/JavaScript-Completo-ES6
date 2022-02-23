// Retorne o url da página atual utilizando o objeto window
const hrefPagina = window.location.href;
console.log(hrefPagina);

// Seleciona o primeiro elemento da página que 
// possua a classe ativo
const elementoAtivo = document.querySelector('.ativo');

// Retorne a linguagem do navegador
const linguagemNavegador = window.navigator.language;
console.log(linguagemNavegador);

// Retorne a largura da janela'
const larguraJanela = window.innerWidth;
console.log(larguraJanela);