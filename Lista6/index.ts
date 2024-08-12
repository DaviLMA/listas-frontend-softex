// 6. Exibir números de 1 a 10 em ordem crescente usando while
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// 7. Exibir números de 10 a 1 em ordem decrescente usando while
i = 10;
while (i >= 1) {
  console.log(i);
  i--;
}

// 8. Calcular a soma dos números de 1 a 100 usando while
i = 1;
let soma = 0;
while (i <= 100) {
  soma += i;
  i++;
}
console.log("Soma de 1 a 100:", soma);

// 9. Calcular o produto dos números de 1 a 5 usando while
i = 1;
let produto = 1;
while (i <= 5) {
  produto *= i;
  i++;
}
console.log("Produto de 1 a 5:", produto);

// 10. Exibir a tabuada do 9 usando while
i = 1;
const numero = 9;
while (i <= 10) {
  console.log(`${numero} x ${i} = ${numero * i}`);
  i++;
}

// 11. Ler sequência de números e exibir o maior e menor valor (parar em 0)
let maior = -Infinity;
let menor = Infinity;
let num: number;
do {
  num = parseInt(prompt("Digite um número (0 para parar):")!);
  if (num !== 0) {
    if (num > maior) maior = num;
    if (num < menor) menor = num;
  }
} while (num !== 0);
console.log("Maior:", maior, "Menor:", menor);

// 12. Ler sequência de números e exibir a média (parar em -1)
soma = 0;
let count = 0;
do {
  num = parseInt(prompt("Digite um número (-1 para parar):")!);
  if (num !== -1) {
    soma += num;
    count++;
  }
} while (num !== -1);
const media = soma / count;
console.log("Média dos números:", media);

// 13. Soma dos dígitos elevados ao cubo
num = parseInt(prompt("Digite um número inteiro:")!);
soma = 0;
while (num > 0) {
  let digito = num % 10;
  soma += digito ** 3;
  num = Math.floor(num / 10);
}
console.log("Soma dos dígitos elevados ao cubo:", soma);

// 14. Exibir números ímpares de 1 a 100 usando while
i = 1;
while (i <= 100) {
  if (i % 2 !== 0) console.log(i);
  i++;
}

// 15. Exibir todos os múltiplos de 3 no intervalo de 1 a 50
i = 1;
while (i <= 50) {
  if (i % 3 === 0) console.log(i);
  i++;
}

// 16. Ler 5 notas de alunos e exibir quantos foram aprovados
let aprovados = 0;
i = 0;
while (i < 5) {
  let nota = parseFloat(prompt("Digite a nota do aluno:")!);
  if (nota >= 7) aprovados++;
  i++;
}
console.log("Número de alunos aprovados:", aprovados);

// 17. Quantos números pares antes do primeiro ímpar (parar em 0)
let paresAntesImpar = 0;
let encontrouImpar = false;
do {
  num = parseInt(prompt("Digite um número (0 para parar):")!);
  if (num === 0) break;
  if (num % 2 === 0) paresAntesImpar++;
  else encontrouImpar = true;
} while (!encontrouImpar);
console.log("Números pares antes do primeiro ímpar:", paresAntesImpar);

// 18. Quantos números pares e ímpares (parar em 0)
let pares = 0;
let impares = 0;
do {
  num = parseInt(prompt("Digite um número (0 para parar):")!);
  if (num !== 0) {
    if (num % 2 === 0) pares++;
    else impares++;
  }
} while (num !== 0);
console.log("Pares:", pares, "Ímpares:", impares);

// 19. Quantos números são divisíveis por 2, 3 e 5 (parar em 0)
let div2 = 0,
  div3 = 0,
  div5 = 0;
do {
  num = parseInt(prompt("Digite um número (0 para parar):")!);
  if (num !== 0) {
    if (num % 2 === 0) div2++;
    if (num % 3 === 0) div3++;
    if (num % 5 === 0) div5++;
  }
} while (num !== 0);
console.log(
  "Divisíveis por 2:",
  div2,
  "Divisíveis por 3:",
  div3,
  "Divisíveis por 5:",
  div5
);

// 20. Média dos números divisíveis por 3 (parar em 0)
soma = 0;
count = 0;
do {
  num = parseInt(prompt("Digite um número (0 para parar):")!);
  if (num !== 0 && num % 3 === 0) {
    soma += num;
    count++;
  }
} while (num !== 0);
const mediaDiv3 = soma / count;
console.log("Média dos números divisíveis por 3:", mediaDiv3);

// 21. Quantos números possuem mais de três dígitos (parar em 0)
let maisDeTresDigitos = 0;
do {
  num = parseInt(prompt("Digite um número (0 para parar):")!);
  if (num !== 0 && (num >= 1000 || num <= -1000)) maisDeTresDigitos++;
} while (num !== 0);
console.log("Números com mais de três dígitos:", maisDeTresDigitos);

// 22. Média dos números entre 50 e 100 (parar em 0)
soma = 0;
count = 0;
do {
  num = parseInt(prompt("Digite um número (0 para parar):")!);
  if (num !== 0 && num >= 50 && num <= 100) {
    soma += num;
    count++;
  }
} while (num !== 0);
const media50_100 = soma / count;
console.log("Média dos números entre 50 e 100:", media50_100);

// 23. Menor valor positivo e ímpar (parar em 0)
let menorPositivoImpar = Infinity;
do {
  num = parseInt(prompt("Digite um número (0 para parar):")!);
  if (num !== 0 && num > 0 && num % 2 !== 0 && num < menorPositivoImpar) {
    menorPositivoImpar = num;
  }
} while (num !== 0);
console.log("Menor valor positivo e ímpar:", menorPositivoImpar);

// 24. Pares e ímpares entre o primeiro e último número digitado (parar em 0)
let primeiro = parseInt(prompt("Digite o primeiro número:")!);
let ultimo = 0;
let numPares = 0;
let numImpares = 0;

do {
  num = parseInt(prompt("Digite um número (0 para parar):")!);
  if (num !== 0) {
    ultimo = num;
    if (num % 2 === 0) numPares++;
    else numImpares++;
  }
} while (num !== 0);

console.log("Pares entre", primeiro, "e", ultimo, ":", numPares);
console.log("Ímpares entre", primeiro, "e", ultimo, ":", numImpares);
