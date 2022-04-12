/* Estruturas tradicionais: 
(tem em todas linguagens)

while       -->     enquanto 
do/while    -->     faça enquanto
for         -->     para 
*/

// exemplo loop while (enquanto)
console.log('while');

// variável de controle do loop
// normalmente chamada de i, j ou k
let i = 1;

while(i <= 5){
    console.log(`Valor de i: ${i}`);
    i++; /* incremento */
}

console.log('do/while');

// variável de controle
let j = 1;

do {
    console.log(`J vale: ${j}`);
    j++;
} while(j <= 5)

console.log('for')

for(let i = 1; i <= 5; i++){
    console.log(`Valor do contador: ${i}`);
}

console.log('Lop e estruturas de dados');

/* array */
let alunos = ["Eduardo", "Vagner", "Thalia", "claudio", "Jéssica"]

for(let i = 0; i < 5; i++){
    console.log(alunos[i]);
}
/* sort() --> função para ordenar arrays */
// console.log( alunos.sort());

console.log('Loops exclusivos do JS');

// for/of: ótimo para array (não funciona para objeto)
for(let aluno of alunos){
    console.log(aluno);
}

// objeto
let livro = {
    titulo: "Senhor dos Anéis",
    ano: 1954,
    volume: 3
}

//for/in: ótimo para objetos (também funciona para array)
for(let dados in livro){
    console.log(livro[dados]);
}