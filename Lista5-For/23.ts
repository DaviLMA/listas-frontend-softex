let totalAltura = 0;
const numeroDePessoas = 5;

for (let i = 1; i <= numeroDePessoas; i++) {
  let altura = parseFloat(prompt(`Digite a altura da pessoa ${i}: `) || "0");
  totalAltura += altura;
}

const mediaAltura = totalAltura / numeroDePessoas;

console.log(`A média de altura é: ${mediaAltura}`);
