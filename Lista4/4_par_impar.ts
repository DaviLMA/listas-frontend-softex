const verificarParidade = (num: number): string => {
  return num % 2 === 0 ? "Par" : "Ímpar";
};

console.log(verificarParidade(7));
