const calcularIMC = (peso: number, altura: number): string => {
  const imc = peso / (altura * altura);
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc < 24.9) {
    return "Peso normal";
  } else if (imc < 29.9) {
    return "Sobrepeso";
  } else if (imc < 39.9) {
    return "Obeso";
  } else {
    return "Muito obeso";
  }
};

console.log(calcularIMC(70, 1.75));
