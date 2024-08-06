const obterDiaSemana = (numero: number): string => {
  const dias = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
  return numero >= 1 && numero <= 7 ? dias[numero - 1] : "Número inválido";
};

console.log(obterDiaSemana(3));
