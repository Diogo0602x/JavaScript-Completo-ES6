//const imgs = document.querySelectorAll('img');

//imgs.forEach(function(item, index, array) {
  //console.log(item, index, array);
//});

const titulos = document.getElementsByClassName('titulos');
 const titulosArray = Array.from(titulos);

 //console.log(titulos);
 //console.log(titulosArray);

titulosArray.forEach(function(item, index, array) {
  //console.log(item, index, array);
});

const imgs = document.querySelectorAll('img');

// let i = 0;
// imgs.forEach((item) => {
//   console.log(i++);
// });

let i = 0;
imgs.forEach(function() {
  console.log(i++)
});

imgs.forEach(() => console.log(i++));
