/* Estrutura de dados no js 

Array (vetor)
lista de dados indexados*/
let alunos = ["tiago", "joão", "marilia", "vagner"];

/* acessando o dado armazenado no índice 1 */
console.log(alunos[1]); // joão
console.log(alunos[3]); // vagner

/* da forma abaixo, conseguimos ver os índices (numeros) */
console.log(alunos);

/* Exercício
1: crie um array com os seguintes dados 
nome e sobrenome, idade, cidade e estado */
let pessoa =  ["Débora dos Santos", 38, "São Paulo", "SP"];

/* 2: mostra a frase no console conforme o exemplo:
Fulano da Silva é da cidade de São Paulo SP e tem 20 anos */
console.log(
    `${pessoa [0]} é da cidade de ${pessoa[2]} e tem ${pessoa[1]} anos`
);

console.log(".......................................................");

/* objeto 
list de dados não-indexados*/
let filme = {
    // propriedade: valor
    titulo: "Homem Aranha", 
    ano: 2021,
    genero: "Ação/Ficção"
};
console.log(filme.titulo);
console.log(filme.genero);

/* Exercício
1: crie um novo objeto contendo os dados (fictícios) de um pedido de uma loja virtuaal*/
let loja = {
    data: "01/02/2022",
    produto: "ZYX",
    peco: 150,
    prazo: 10
};
/* 2: mostre a seguinte frase:
O produto XYZ foi comprado em 07/04/2022 com entrega em 7 dias úteis. */
console.log(`O produto ${loja.produto} foi comprado em ${loja.data} com entrega em ${loja.prazo} dias úteis.`);