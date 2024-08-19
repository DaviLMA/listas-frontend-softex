//20.Crie um programa que leia 5 notas de alunos e exiba quantos deles foram aprovados (nota maior
//ou igual a 7).

let notas: number[] = [8, 5, 7, 3, 10];

for (let i = 0; i < notas.length; i++) {
  if (notas[i] < 7) {
    console.log("Reprovado - Nota: " + notas[i]);
  } else {
    console.log("Aprovado - Nota: " + notas[i]);
  }
}
