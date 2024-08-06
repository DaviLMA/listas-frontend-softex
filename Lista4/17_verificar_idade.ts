const verificarFaixaEtaria = (idade: number): string => {
  if (idade >= 0 && idade <= 1) {
    return "Bebê";
  } else if (idade <= 12) {
    return "Criança";
  } else if (idade <= 18) {
    return "Adolescente";
  } else {
    return "Adulto";
  }
};

console.log(verificarFaixaEtaria(25));
