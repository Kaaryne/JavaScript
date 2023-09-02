
/*
mensagem = "Olá" 

alert(mensagem)  
*/

var y;

y = 37;
document.write(y);
document.write ("<br>");

y = "Karyne";
document.write(y);
document.write ("<br>");

y = true;
document.write(y);
document.write ("<br>");

y = null;
document.write(y);
document.write ("<br>");

/* Expressões */

var expressao;

expressao = 30 + 20 - 10 * 5;
document.write("30 + 20 - 10 * 5 = ");  /* expressão escrita, pois está entre aspas (string) */
document.write(expressao);              /* resultado "0", pois é a variável */

/* Decisões */

if (condição) {
    declaracao_1;
}   else {
    declaracao_2;
}

/* Estruturas compostas */

if (condicao) {
    declaracao_1;
}   else if (condicao_2) {
    declaracao_2;
}   else if (condicao_n) {
    declaracao_n;
}   else {
    declaração_final;
}

/* Condições podem executar mais de 1 comando */

if (condicao) {
    declaracao_1_executada_se_condicao_for_verdadeira;
    declaracao_2_executada_se_condicao_for_verdadeira;
}   else {
    declaracao_3_executada_se_condicao_for_falsa;
    declaracao_4_executada_se_condicao_for_falsa;
}

/* Exemplo */

var idade;
idade = prompt("Digite a sua idade: ");

if (idade >= 18) {
    var maiorIdade = true;
}   else {
    var maiorIdade = false;
}

if (maiorIdade) {
    document.write("Maior de idade, pode dirigir!");
}   else {
    document.write("Menor de idade. :(");
}