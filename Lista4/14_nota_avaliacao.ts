const avaliarNota = (nota: number): string => {
  switch (nota) {
    case 1:
      return "Muito insuficiente";
    case 2:
      return "Insuficiente";
    case 3:
      return "Regular";
    case 4:
      return "Bom";
    case 5:
      return "Muito bom";
    default:
      return "Nota inválida";
  }
};

console.log(avaliarNota(4));
