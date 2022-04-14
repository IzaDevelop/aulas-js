/* exemplo 1 */
const exemplo01 = document.querySelector("#subtitulo-exemplo01");
const msg = document.querySelector("#mensagem");

// monitor/ouvinte de evento
exemplo01.addEventListener("click", function(){
    msg.textContent = "olá!";
    exemplo01.style.color = "red";
});

exemplo01.addEventListener("dblclick", function(){
    msg.textContent = "";
    exemplo01.style.color = "blue";
});

//mouseover, mouseout, click, dblclick

/* exemplo 2: modo noturno */
const botao = document.querySelector("#noturno");
const pagina = document.querySelector("body");

botao.addEventListener("click", function(){
    pagina.classList.toggle("modo-noturno");
    if(botao.textContent == 'Ativar') {
        botao.textContent = 'Desativar';
    } else {
        botao.textContent = 'Ativar';
    }
});

/* exemplo 3: simulação de cadastro */
const formulario = document.querySelector("form");
const campoNome = document.querySelector("#nome");
const campoNota1 = document.querySelector("#nota1");
const campoNota2 = document.querySelector("#nota2");
const divResultados = document.querySelector("#resultados");

//detectar o acionamento do formulário
//obs: a função dentro do listener é chamada de callback
formulario.addEventListener("submit", function(event){
    /* estamos anulando o comportamento padrão do navegador (redirecionar o formulário) */
    event.preventDefault();

    //1: capturar os dados digitados nos campos
    let nome = campoNome.value;
    let nota1 = parseFloat(campoNota1.value);
    let nota2 = parseFloat(campoNota2.value);

    //2: calcular a média de notas
    let media = (nota1 + nota2) / 2;

    let situacao
    if (media >= 7) {
        situacao = "Aprovado";
    } else {
        situacao = "Reprovado";
    }

    //3: criar elemento dinamicamente via JS

    //3.1: criar o elemento/tag
    let paragrafo = document.createElement("p");

    //3.2: montar o conteúdo da tag
    paragrafo.innerHTML = `<b>${nome}</b> - <i>${media}</i> - ${situacao}`;

    //3.3: adicionar tag/conteúdo a div de resultados
    divResultados.appendChild(paragrafo);

    formulario.reset(); // this.reset(formulario);

    //desenvolvendo o foco (cursor) para o campo nome
    campoNome.focus();
});

/* exercícios 
1)programe o necessário para determinar se o aluno está aprovado ou reprovado. Critério nota igual ou maior que 7 aprovado

2)mostre a situaçãoo do aluno junto com o nome e a média

3)desafio: faça com que os campos do formulário sejam resetados apos o envio*/