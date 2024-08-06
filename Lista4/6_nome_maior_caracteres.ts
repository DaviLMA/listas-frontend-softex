const compararNomes = (nome1: string, nome2: string): string => {
  if (nome1.length > nome2.length) {
    return `${nome1} tem mais caracteres que ${nome2}`;
  } else if (nome2.length > nome1.length) {
    return `${nome2} tem mais caracteres que ${nome1}`;
  } else {
    return "Os nomes têm a mesma quantidade de caracteres";
  }
};

console.log(compararNomes("Alice", "Roberto"));
