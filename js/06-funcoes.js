'use strict'; //modo estrito/restrito

/* funções são blocos de códigos que podem ser executados e reaproveitados em praticamente qualquer parte da sua aplicação.
Usar funções também é uma forma de separar a lógica e organizar melhor sua programação */

/* sintaxe tradicional*/
function linha(){
    console.log("------------------------------");
}

let curso = "programador web";
let escola = "senac";
let ano = 2022;

console.log(`Curso: ${curso}`);
linha();
console.log(`Escola: ${escola}`);
linha();
console.log(`Ano: ${ano}`);

            //parâmetros/argumentos
//versão 1: sintaxe tradicional
/* function soma(valor1, valor2){
    let total = valor1 + valor2;
    return total;
}*/

// versão 2: sintaxe arrow function (função seta/flecha)
/* const soma = (valor1, valor2) => {
    let total = valor1 + valor2;
    return total
}; */

//arrow function com retorno implicito
const soma = (valor1, valor2) => valor1 + valor2;

console.log(soma(10, 5));

let resultado = soma(100, 50);
console.log(resultado);
if(resultado < 1000){
    console.log('Abaixo da meta');
}

linha();

//versão 1: tradicional 
/* function dobra(numero){
    let resultado = numero * 2;
    return resultado;
} */

// versão simples tradicional
/* function dobra(numero){
    return numero * 2;
} */

//versão 2: arrow function
/* const dobra = (numero) => {
    let resultado = numero * 2;
    return resultado;
}; */

//versão simples arrow function
/* const dobra = (numero) => {
    return numero * 2;
}; */

//retorno implicito
/* obs: como só temos um parâmetro (numero), pode tirar os () */
const dobra = numero => numero * 2;

console.log(dobra(10));
console.log(dobra(150))

linha();
let nota1 = 8.5;
let nota2 = 7.4;

const calcularMedia = (n1, n2) => (n1 + n2) / 2;

console.log(calcularMedia(nota1, nota2));