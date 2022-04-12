/* estrutura condicionais
if (se), else (senão), else if (senão se)

operadorres relacionais (usados com condicionais)
> maior 
< menor
>= maior ou igual
<= menor ou igual
== igualdade
!= diferente */

// condicional simples (se utiliza apenas if)
let numero = 10;
if(numero > 0)/* condição */{
    console.log(`${numero} é maior que zero`);
}

// condicional composta (se utiliza if e else)
let aluno = "Izabelle"
let nota1 = 8
let nota2 = 10
let media = (nota1 + nota2)/2;
console.log(`Aluno: ${aluno}`);
console.log(`Notas: ${nota1} e ${nota2}`);
console.log(`Média: ${media}`);
/* .toFixeed() limita a quantidade de casas decimais  */
let faltas = 10;
console.log(`Faltas: ${faltas}`);

let situacao; /* undefined (indefinida) */

/* utilizando apenas uma condição */
// if(media >= 7){

/* utilizado para avaliar duas condições ao mesmo tempo */
/* && --> operador lógico E*/
if(media >= 7 && faltas < 15){
    situacao = "Aprovado";
} else {
    situacao = "Reprovado";
}
console.log(situacao);

// condicional encadeada (utiliza if, else e else if)
let desempenho;

if (media < 3) {
    desempenho = "péssimo"
} else if (media < 5) {
    desempenho = "ruim"
} else if (media < 7) {
    desempenho = "regular"
} else if (media < 9) {
    desempenho = "bom"
} else {
    desempenho = "ótimo"
}

console.log(desempenho);