const verificarDivisibilidade = (num: number): string => {
  return num % 3 === 0 && num % 5 === 0
    ? "Divisível por 3 e 5"
    : "Não é divisível por 3 e 5";
};

console.log(verificarDivisibilidade(15));
