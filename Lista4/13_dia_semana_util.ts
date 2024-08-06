const verificarDiaUtil = (dia: string): string => {
  const diasUteis = [
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
  ];
  const fimDeSemana = ["sábado", "domingo"];

  if (diasUteis.includes(dia.toLowerCase())) {
    return "Dia útil";
  } else if (fimDeSemana.includes(dia.toLowerCase())) {
    return "Fim de semana";
  } else {
    return "Dia inválido";
  }
};

console.log(verificarDiaUtil("sábado"));
