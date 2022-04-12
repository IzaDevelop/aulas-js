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
function soma(valor1, valor2){
    let total = valor1 + valor2;
    return total;
}

console.log(soma(10, 5));

let resultado = soma(100, 50);
console.log(resultado);
if(resultado < 1000){
    console.log('Abaixo da meta');
}