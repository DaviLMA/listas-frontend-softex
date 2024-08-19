let numero1 = parseInt(prompt("Digite um número inteiro: ") || "1");

console.log(`Os divisores de ${numero1} são:`);
for (let i = 1; i <= numero1; i++) {
  if (numero1 % i === 0) {
    console.log(i);
  }
}
