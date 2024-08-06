const verificarIdade = (idade: number): string => {
  return idade >= 18 ? "Maior de idade" : "Menor de idade";
};

console.log(verificarIdade(20));
