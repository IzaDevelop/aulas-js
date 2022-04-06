/* o script é lido de cima para baixo, preferencialmente se coloca antes do termino da tag <body> */
        
/* comentário de multiplas linhas (SHIFT ALT A)*/ 

// comentário de linha única (CTRL;)

/* sempre que trabalhar com texto devemos colocalo entre aspas duplas "", àspas simples'' ou crase `` 
    
tamplete string/literal (veremos depois)*/

    console.log("Olá JavaScript!");

// /* variáveis e constantes são espaços identificados na memoria para armazenar dados temporariamente */
    
// // variavel, valor pode mudar
// // obs: antigamente era usado "var" 
    let ano = 2022;

// // constante, valor imutavel (não muda)
// // const aluno = prompt();
    const aluno = "Izabelle";
    
    console.log(ano);
    console.log(aluno)
    console.log(ano, aluno);

// /* operações matematicas
// + (adição),
// - (subtração), 
// * (multiplicação), 
// / (divisão) */

    let preco = 1500;
    let desconto = 250;
    let precoFinal = preco - desconto;
    console.log(preco, desconto, precoFinal)

    let produto = "TV Led";

// // forma tradicional de juntar texto e numero (concatenação)
    console.log("A "+produto+" custava "+preco+" reais.");

// // forma moderna (tamplate string/literal)
    console.log(`A ${produto} custava ${preco} reais.`);
