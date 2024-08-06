const verificarEstadoCivil = (estadoCivil: string): string => {
  switch (estadoCivil.toLowerCase()) {
    case "solteiro":
      return "Solteiro";
    case "casado":
      return "Casado";
    case "divorciado":
      return "Divorciado";
    case "viuvo":
      return "Viúvo";
    default:
      return "Estado civil inválido";
  }
};

console.log(verificarEstadoCivil("Casado"));
