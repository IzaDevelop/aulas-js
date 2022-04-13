/* funções/métodos de acesso/seleção ao DOM 

-getElementById()     ->  seleciona UM elemento atráves do id
-querySelector()      -> seleciona UM elemento atráves de um seletor
-querySelectorAll()   -> seleciona VÁRIOS elemento atráves de um seletor */

//exemplos
// const titulo = document.getElementById("titulo-principal");
const titulo = document.querySelector("#titulo-principal");
const subtitulos = document.querySelectorAll("h2");

console.log(titulo);
console.log(subtitulos);
console.log(subtitulos[0]);

// leitura do conteúdo
console.log(titulo.textContent);
console.log(subtitulos[1].textContent);

// alteração do conteúdo
titulo.textContent = "Olá DOM, meu velho amigo!";
subtitulos[0].innerHTML = "<i>Aprendendo DOM</i>";

// manipulando CSS via JS

// 1) inline 
const pagina = document.querySelector("body");
pagina.style.backgroundColor = "lightblue";
pagina.style.fontFamily = "verdana";
pagina.style.margin = 0;

// 2) classe
/* const primeiroItem = document.querySelectorAll("#lista-editores li");
console.log(primeiroItem[0]); */

const primeiroItem = document.querySelector("#lista-editores li:first-child");
console.log(primeiroItem);
primeiroItem.classList.add("destaque-item")