const verificarNumero = (num: number): string => {
  if (num > 0) {
    return "Positivo";
  } else if (num < 0) {
    return "Negativo";
  } else {
    return "Igual a zero";
  }
};

console.log(verificarNumero(5));
