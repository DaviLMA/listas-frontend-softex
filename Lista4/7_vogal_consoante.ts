const verificarCaractere = (char: string): string => {
  const vogais = ["a", "e", "i", "o", "u"];
  return vogais.includes(char.toLowerCase()) ? "Vogal" : "Consoante";
};

console.log(verificarCaractere("A"));
