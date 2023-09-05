---Variáveis---

JavaScript é uma linguagem fracamente tipada e dinâmica:

- não é ncessário declarar o tipo (int, float, double, etc).
- todas as variáveis são objetos (referência).
- números são reais de 64 bits.
- a variável é alterada conforme os valores atribuídos a ela.

=============================================================

---Operadores---

+ 
Efetuar uma soma de valores ou concatenação de strings.

-
Subtração de valores

*
MUltiplicação de valores

/
Divisão de valores

%
Resto da divisão

++
Incremento (aumenta uma unidade)

--
Decremento

=============================================================

---Operadores de Comparação---

"=="
Valor igual

"==="
Valor e tipo iguais

"!="
Diferente

"!=="
Valor e tipo diferentes

">"
Maior que

"<"
Menor que

">="
Maior ou igual

"<="
Menor ou igual

"&&"
"E" lógico (and)

"||"
"OU" lógico (or)

"!"
Negação (not)

--Os operadores de comparação, gerealmente, são utilizados 
nas condições para estruturas de seleção (decisão) e condições
para estruturas de repetições--

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators

=============================================================

---Estruturas de Decisão---

Condicional Simples (if...else)

Valores que retornam false:

false
undefined
null
0
NaN
string vazia ("")

-> todos os outros valores, incluindo todos os objetos, são avaliados como verdadeiros quando passados para a declaração condicional.

===============================================================

---Estruturas de Repetição---

While:
A estrutura de repetição "while" é usada para executar um conjunto de ações, enquanto uma condição for verdadeira. Quando a condição se tornar falsa, o bloco é finalizado.
O fluxo obrigatoriamente entra no laço de repetição pelo menos 1 vez.
Somente saira do laço de repetição quando a condição for satisfeita

Do While (repita até)
Uma outra estrutura muito semelhante é a do "do - while", que executa um bloco de ações até que uma condição seja falsa.

For:
Uma outra estrutura de repetição muito importante é o "for", que usa um contador para executar um bloco um bloco de ações uma determinada quantidade de vezes.

================================================================

---Vetoriais (arrays)---

Um vetor (array) é um tipo de dado estruturado onde se tem um número fixo de componentes. Geralmente armazena várias variáveis do mesmo tipo, porém em javascript é possível armazenar tipos diferentes em um mesmo vetor.

Métodos importantes:

Pop: remove o último elemento do array.

Unshift: adciona um ou mais elementos no começo do array.

Shift: remove o primeiro elemento do vetor.

Splice: remove ou altera um ou mais elementos do vetor.

Sort: ordena os dados em um vetor.

Reverse: inverte a posição dos vetores em um vetor.

Concat: junta um ou mais vetores.

Join: junta os valores de um valor com um caractere de separador.

===============================================================

---Matrizes---

Uma matriz (array bidimensional) é um tipo de dado estruturado onde se tem um número fixo de componentes em duas dimenções.

3  6  9
2  4  6
1  2  3  -> Matriz 3x3 que contém números inteiros.

var matint = [[3,6,9,],[2,4,6],[1,2,3]]
            
matint[0][0] <-  3  6  9
                 2  4  6 -> matint[1][2]
                 1  2  3
                    |
                matint[2][1]

===================================================================

---Funções e Strings---

De modo geral, função é um "subprograma" que pode ser chamado por um código externo à função;

Uma função é composta por um conjunto de instruções que executa uma tarefa ou calcula um valor;

Valores podem ser passados para uma função, que por sua vez retorna um valor resposta.

---

A montagem de uma função consiste no uso da palavra function, seguida por:

-> Nome da função;
-> Lista de argumentos para a função, entre parênteses e separados por vírgulas;
-> Conjunto de instruções que definem a função, entre chaves {}.

====================================================================

---Strings---

String é um conjunto de caracteres, geralmente utilizada para representar palavras, frases, textos, etc;

Strings são palavras, frases, textos, etc;

Em Javascript, strings nada mais são do que um vetor de caracteres. 

    Exemplo: var str = "BOM DIA!";

        B O M   D I A !
        |             |
    str[0]            str[7]

=====================================================================

---Biblioteca jQuery---

Uma biblioteca JavaScript desenvolvida por John Resing;

Uma das bibliotecas JavaScript mais populares na internet;

Disponibilizadas sobre as licenças MIT e GPL;

Código aberto.

AS PRINCIPAIS CARACTERÍSTICAS DO JQUERY SÂO:

Resolução da incompatibilidade entre os navegadores;
Redução de código;
Reutilização do código através de plugins;
Utilização de uma vasta quantidade de plugins criados por outros desenvolvedores;
Trabalha com AJAX e DOM;
Implementação segura de recursos de CSS1 CSS2 e CSS3.
                