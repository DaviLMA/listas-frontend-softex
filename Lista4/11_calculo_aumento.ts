const calcularAumento = (salario: number): number => {
  const aumento = salario > 1500 ? salario * 0.1 : salario * 0.15;
  return salario + aumento;
};

console.log(calcularAumento(1600));
