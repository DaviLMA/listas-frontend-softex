let numero2 = parseInt(prompt("Digite um número inteiro: ") || "0");
let somaPares = 0;

while (numero2 !== 0) {
  let digito = numero2 % 10;
  if (digito % 2 === 0) {
    somaPares += digito;
  }
  numero2 = Math.floor(numero2 / 10);
}

console.log(`A soma dos dígitos pares é: ${somaPares}`);
