/*
Desafio 3

Dado um vetor de números e um número n. Determine a soma com o menor número de elementos entre os números do vetor mais próxima de n e também mostre os elementos que compõem a soma. Para criar a soma, utilize qualquer elemento do vetor uma ou mais vezes.

Exemplo:

Entrada de dados:

N = 10
V = [2, 3, 4]

Saída de dados:

10
[2, 4, 4]
[3, 3, 4]

Explicação:

Se N = 10 e V = [2, 3, 4] você pode utilizar as seguintes soma: [2, 2, 2, 2, 2], [2, 2, 3, 3], [2, 4, 4] ou [3, 3, 4]. Como a quantidade de elementos em [2, 4, 4] e [3, 3, 4] é igual, os dois conjuntos devem ser mostrados. */


function somaArray(numero, soma, numeroArray, retorna, contador, numeros, elementos) {
  contador++;

  if(soma > numero || contador > elementos) {
    return;
  }
  
  if(soma === numero){
    retorna.push(numeros);
    if(contador < elementos[0]) {
      elementos[0] = contador;
    }
    return;
  }
  for (let i = 0; i < numeroArray.length; i++) {
    somaArray(numero, soma + numeroArray[i], numeroArray, retorna, contador, 
      [...numeros, numeroArray[i]], elementos);
  }
}

let numeroArray = [4,5,6];
let retorna = [];
let elementos = [Number.MAX_SAFE_INTEGER];
somaArray(11, 0, numeroArray, retorna, 0, [], elementos);
console.log(retorna.filter(numeros => numeros.length < elementos[0]));



  

