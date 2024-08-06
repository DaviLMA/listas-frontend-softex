const calcularOperacao = (
  num1: number,
  num2: number,
  operacao: number
): number | string => {
  switch (operacao) {
    case 1:
      return num1 + num2;
    case 2:
      return num1 - num2;
    case 3:
      return num1 * num2;
    case 4:
      return num1 / num2;
    default:
      return "Operação inválida";
  }
};

console.log(calcularOperacao(10, 5, 3));
