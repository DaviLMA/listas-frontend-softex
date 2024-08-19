let maior: number = 0;
let menor: number = 0;

for (let i = 1; i <= 10; i++) {
  let numero = parseFloat(prompt(`Digite o número ${i}: `) || "0");

  if (i === 1) {
    maior = numero;
    menor = numero;
  } else {
    if (numero > maior) {
      maior = numero;
    }

    if (numero < menor) {
      menor = numero;
    }
  }
}

console.log(`O maior número digitado foi: ${maior}`);
console.log(`O menor número digitado foi: ${menor}`);
