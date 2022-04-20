//acessando elementos usando jQuery
const titulo = $("h1");

//mudar o texto do elemento
titulo.text("olá jQuery")

//css via jQuery
// titulo.css("color", "blue");
titulo.css({
    "color" : "blue",
    "text-align" : "center",
    "font-size" : "25px"
});

//Manipulando evento com jQuery
titulo.on("click", function(){
    $("body").css("background-color", "yellow")
    $("h2").text("clicou!");

    titulo.fadeOut();
});