const calcularMedia = (nota1: number, nota2: number, nota3: number): string => {
  const media = (nota1 + nota2 + nota3) / 3;
  return media >= 7 ? "Aprovado" : "Reprovado";
};

console.log(calcularMedia(7, 8, 6));
