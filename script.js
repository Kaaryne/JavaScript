
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