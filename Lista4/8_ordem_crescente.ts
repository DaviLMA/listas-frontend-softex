const ordenarNumeros = (num1: number, num2: number, num3: number): number[] => {
  return [num1, num2, num3].sort((a, b) => a - b);
};

console.log(ordenarNumeros(3, 1, 2));
