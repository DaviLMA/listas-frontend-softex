const compararNumeros = (num1: number, num2: number): string => {
  if (num1 > num2) {
    return `${num1} é maior que ${num2}`;
  } else if (num2 > num1) {
    return `${num2} é maior que ${num1}`;
  } else {
    return "Os números são iguais";
  }
};

console.log(compararNumeros(5, 10));
