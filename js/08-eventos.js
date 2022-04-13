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
});

botao.addEventListener("click", function(){
    botao.textContent = "Desativar";
});