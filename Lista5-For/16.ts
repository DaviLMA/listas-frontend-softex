let total = 0;
const numberOfNotes = 5;

for (let i = 1; i <= numberOfNotes; i++) {
  let nota = parseFloat(prompt(`Digite a nota ${i}: `) || "0");
  total += nota;
}

const media = total / numberOfNotes;

console.log(`A média das notas é: ${media}`);
