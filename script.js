
// mensagem = "Olá"  /* atribuição de valor a variavel */

// alert(mensagem);   /* mensagem no site */


// var y;

// y = 37;
// document.write(y);
// document.write ("<br>");

// y = "Karyne";
// document.write(y);
// document.write ("<br>");

// y = true;
// document.write(y);
// document.write ("<br>");

// y = null;
// document.write(y);
// document.write ("<br>");


// /* Expressões */

// var expressao;

// expressao = 30 + 20 - 10 * 5;
// document.write("30 + 20 - 10 * 5 = ");  /* expressão escrita, pois está entre aspas (string) */
// document.write(expressao);              /* resultado "0", pois é a variável */


// /* Decisões */

// if (condição) {
//     declaracao_1;
// }   else {
//     declaracao_2;
// }


// /* Estruturas compostas */

// if (condicao) {
//     declaracao_1;
// }   else if (condicao_2) {
//     declaracao_2;
// }   else if (condicao_n) {
//     declaracao_n;
// }   else {
//     declaração_final;
// }


// /* Condições podem executar mais de 1 comando */

// if (condicao) {
//     declaracao_1_executada_se_condicao_for_verdadeira;
//     declaracao_2_executada_se_condicao_for_verdadeira;
// }   else {
//     declaracao_3_executada_se_condicao_for_falsa;
//     declaracao_4_executada_se_condicao_for_falsa;
// }


// /* Exemplo */

// var idade;
// idade = prompt("Digite a sua idade: ");

// if (idade >= 18) {
//     var maiorIdade = true;
// }   else {
//     var maiorIdade = false;
// }

// if (maiorIdade) {
//     document.write("Maior de idade, pode dirigir!");
// }   else {
//     document.write("Menor de idade. :(");
// }


// /* Declaração Switch */

// switch (expressao) {
//     case rotulo_1:
//         declaracoes_1
//         [break;]
//     case rotulo_2:
//         declaracoes_2
//         [break;]
//     ...
//     default:
//         declaracoes_padrao
//         [break;]
// }


/* Exemplo */

// cargo = prompt("Digite o seu cargo: ");
// salario = 2000;

// switch (cargo) {
//     case "gerente":
//         salario *= 1.15; // salario = salario *1.15
//         break;
//     case "supervisor":
//         salario *= 1.10; //salario = salario * 1.10
//         break;
//     default:
//         salario *= 1.05; // salario = salario * 1.05
// }

// console.log("Salario do "+ cargo +": " + salario);


/* Estrutura "while" */

// while (condicao)
//     declaracao


/* Exemplo (estrutura while) */

// n = 0;
// x = 0;
// while (n < 4) {
//     n++;
//     x += n; // x = x + n
//     console.log(x);
// }


/* Estrutura "do-while" */

// do
//     declaracao
// while (condicao);


/* Exemplo (estrutura do-while) */

// i = 0;
// do {
//     i = i + 1;
//     console.log(i)
// } while (i < 5);


/* Estrutura "for" */

// for ([expressaoInicial]; [condicao]; [incremento])
//     declaracao


/* Exemplo (estrutura do for) */

// var cont;

// for(cont = 0; cont <10; cont++)
// {
//     console.log("Karyne")
// }


/* array */

// var sul = new Array("RS", "SC", "PR");
// var sudeste = new Array("SP", "RJ", "MG", "ES");

// document.write("ESTADOS DA REGIÂO SUL:");
// document.write("<br>");
// document.write(sul [0]);
// document.write("<br>");
// document.write(sul [1]);
// document.write("<br>");
// document.write(sul [2]);

// var tam = sudeste.length; /* esta variável armazena o tamanho do vetor armazenado na variável tam */

// document.write("ESTADOS DA REGIÃO SUDESTE:");

// for(i=0; i<tam; i++){
//     document.write("<br>");
//     document.write(sudeste[i]);
// }

// var pessoa = [2088812332, "Karyne Fyrlan", 16, "F"];
// document.write("RG: " + pessoa[0] + "<br>");
// document.write("NOME COMPLETO: " + pessoa[1] + "<br>");
// document.write("IDADE: " + pessoa[2] + "<br>");
// document.write("SEXO: " + pessoa[3] + "<br>");

// var meses = ["jan", "fev", "mar", "abr", "mai","jun","jul"];
// var dolar = [4.56, 4.89, 4.93, 5.23, 5.45];

// document.write("<u>VALOR DO DOLAR:</u> <br>");
// for(i=0; i< dolar.length; i++){
//     document.write("<br>");
//     document.write(meses[i] + ": R$" + dolar[i])
// }


/* Pop */
// var frutas = ["banana ", "laranja ", "ameixa ", "abacaxi "];
// frutas.pop();
// document.write(frutas);

/* Unshift */
// var idades = [25, 30, 32, 37];
// idades.unshift(42);
// alert(idades);

/* Matriz */


/* Exemplos: */

// var matint = [[3,6,9,],[2,4,6],[1,2,3]]

// for(let lin=0 ; lin<3 ; lin++){
//     for (let col=0; col<3; col++)
//         document.write(matint[lin][col] + " ");

//     document.write("<br>");
// }


// var notas = [[4.5 , 6.5 , 8.7],[8.5 , 9.7 , 9.9]]

// var colunas = notas[0].length;

// soma = 0;

// for(let i=o ; i<colunas ; i++){
//     soma = soma + notas[1][i]; */ <- para saber a média do joão mudamos a linha para 0, ou seja notas[0][i] */
// }

// var media = soma/colunas;
// document.write("Media da Maria: " + media);

/* Tabuleiro de Xadrez com Matriz */

var tabuleiro = 
[   ['R','N','B','Q','K','B','N','R']
    ['P','P','P','P','P','P','P','P']
    [' ',' ',' ',' ',' ',' ',' ',' ']
    [' ',' ',' ',' ',' ',' ',' ',' ']
    [' ',' ',' ',' ',' ',' ',' ',' ']
    [' ',' ',' ',' ',' ',' ',' ',' ']
    ['p','p','p','p','p','p','p','p']
    ['r','n','b','q','k','b','n','r']];

console.log(tabuleiro.join('\n') + '\n\n');

tabuleiro[4][2] = tabuleiro[6][2];
tabuleiro[6][2] = ' ';
console.log(tabuleiro.join('\n'));

