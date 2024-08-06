const obterNomeMes = (mes: number): string => {
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return mes >= 1 && mes <= 12 ? meses[mes - 1] : "Mês inválido";
};

console.log(obterNomeMes(5));
