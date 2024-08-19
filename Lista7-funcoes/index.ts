// 5. Função que retorna a soma de dois números
function sum(a: number, b: number): number {
  return a + b;
}

// 6. Função que verifica se um número é par
function isPar(num: number): boolean {
  return num % 2 === 0;
}

// 7. Função que calcula a média aritmética de três notas
function average(nota1: number, nota2: number, nota3: number): number {
  return (nota1 + nota2 + nota3) / 3;
}

// 8. Função que calcula o IMC (Índice de Massa Corporal)
function imc(peso: number, altura: number): number {
  return peso / (altura * altura);
}

// 9. Função que calcula o valor com desconto aplicado
function calcularDesconto(preco: number, percentualDesconto: number): number {
  return preco - (preco * percentualDesconto) / 100;
}

// 10. Função que calcula o imposto de renda com base no salário
function calcularImpostoRenda(salario: number): number | string {
  if (salario <= 1903.98) return "Isento";
  if (salario <= 2826.65) return salario * 0.075;
  if (salario <= 3751.05) return salario * 0.15;
  if (salario <= 4664.68) return salario * 0.225;
  return salario * 0.275;
}

// 11. Função que calcula a média dos números arredondada para o inteiro mais próximo
function calcularaverageArredondada(numeros: number[]): number {
  const sum = numeros.reduce((acc, num) => acc + num, 0);
  return Math.round(sum / numeros.length);
}

// 12. Função que conta a quantidade de dígitos pares e ímpares em um número
function contarDigitosParesImpares(num: number): {
  pares: number;
  impares: number;
} {
  const strNum = num.toString();
  let pares = 0,
    impares = 0;
  for (const digit of strNum) {
    const digito = parseInt(digit);
    if (digito % 2 === 0) pares++;
    else impares++;
  }
  return { pares, impares };
}

// 13. Função que calcula a média das notas dos alunos
interface Aluno {
  nome: string;
  nota: number;
}

function calcularaverageAlunos(alunos: Aluno[]): number {
  const sumNotas = alunos.reduce((acc, aluno) => acc + aluno.nota, 0);
  return sumNotas / alunos.length;
}

// 14. Função que calcula a idade com base no ano de nascimento
function calcularIdade(anoNascimento: number): number {
  const anoAtual = new Date().getFullYear();
  return anoAtual - anoNascimento;
}

// 15. Função que gera a tabuada de um número
function gerarTabuada(numero: number): void {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

// 16. Função que permite ao usuário adivinhar um número gerado aleatoriamente entre 1 e 100
function advinheNumero(): void {
  const numero = Math.floor(Math.random() * 100) + 1;
  let tentativa: number;
  let tentativas = 0;
  do {
    tentativa = parseInt(prompt("Adivinhe o número entre 1 e 100:") || "0");
    tentativas++;
    if (tentativa < numero) console.log("O número é maior.");
    else if (tentativa > numero) console.log("O número é menor.");
  } while (tentativa !== numero);
  console.log(`Parabéns! Você acertou em ${tentativas} tentativas.`);
}

// 17. Função que verifica se um objeto possui uma propriedade específica
function verificarPropriedade(objeto: object, propriedade: string): boolean {
  return propriedade in objeto;
}

// 18. Função que calcula o preço de venda do produto considerando custo, margem de lucro e frete
function calcularPrecoProduto(
  custo: number,
  margemLucro: number,
  frete: number
): number {
  return custo + (custo * margemLucro) / 100 + frete;
}

// 19. Função que encontra a palavra mais longa em uma string
function encontrarPalavraMaisLonga(frase: string): string {
  const palavras = frase.split(" ");
  return palavras.reduce(
    (maisLonga, palavra) =>
      palavra.length > maisLonga.length ? palavra : maisLonga,
    ""
  );
}

// 20. Função que imprime uma lista de strings em um quadro retangular
function imprimirQuadro(lista: string[]): void {
  const largura = Math.max(...lista.map((str) => str.length)) + 4;
  console.log("*".repeat(largura));
  for (const str of lista) {
    console.log(`* ${str.padEnd(largura - 3)}*`);
  }
  console.log("*".repeat(largura));
}

// 21. Função que retorna strings com mais de 5 caracteres
function filtrarStringsLongas(strings: string[]): string[] {
  return strings.filter((str) => str.length > 5);
}

// 22. Função que retorna livros escritos por um autor específico
interface Livro {
  titulo: string;
  autor: string;
  ano: number;
}

function filtrarLivrosPorAutor(livros: Livro[], autor: string): Livro[] {
  return livros.filter((livro) => livro.autor === autor);
}

// 23. Função que retorna o nome da pessoa mais velha em uma lista de pessoas
interface Pessoa {
  nome: string;
  idade: number;
}

function encontrarPessoaMaisVelha(pessoas: Pessoa[]): string {
  const pessoaMaisVelha = pessoas.reduce((maisVelha, pessoa) =>
    pessoa.idade > maisVelha.idade ? pessoa : maisVelha
  );
  return pessoaMaisVelha.nome;
}

// 24. Função que retorna carros fabricados após um certo ano
interface Carro {
  marca: string;
  modelo: string;
  ano: number;
}

function filtrarCarrosPorAno(carros: Carro[], ano: number): Carro[] {
  return carros.filter((carro) => carro.ano > ano);
}

// 25. Função que inverte uma string
function inverterString(str: string): string {
  return str.split("").reverse().join("");
}

// Testes das funções
console.log(sum(5, 3)); // 8
console.log(isPar(4)); // true
console.log(average(7, 8, 9)); // 8
console.log(imc(70, 1.75)); // 22.857142857142858
console.log(calcularDesconto(100, 10)); // 90
console.log(calcularImpostoRenda(3000)); // 450
console.log(calcularaverageArredondada([7, 8, 9])); // 8
console.log(contarDigitosParesImpares(123456)); // { pares: 3, impares: 3 }
console.log(
  calcularaverageAlunos([
    { nome: "João", nota: 7 },
    { nome: "Maria", nota: 9 },
  ])
); // 8
console.log(calcularIdade(1990)); // 34
gerarTabuada(5); // Tabuada de 5
advinheNumero(); // Permite adivinhar o número
console.log(verificarPropriedade({ nome: "Ana" }, "nome")); // true
console.log(calcularPrecoProduto(100, 20, 10)); // 130
console.log(encontrarPalavraMaisLonga("Encontre a palavra mais longa")); // Longa
imprimirQuadro(["Hello", "World", "in", "a", "frame"]);
console.log(filtrarStringsLongas(["short", "medium", "verylong"])); // ['medium', 'verylong']
console.log(
  filtrarLivrosPorAutor(
    [
      { titulo: "Book1", autor: "Author1", ano: 2000 },
      { titulo: "Book2", autor: "Author2", ano: 2010 },
    ],
    "Author1"
  )
); // [{ titulo: 'Book1', autor: 'Author1', ano: 2000 }]
console.log(
  encontrarPessoaMaisVelha([
    { nome: "Carlos", idade: 45 },
    { nome: "Maria", idade: 52 },
  ])
); // Maria
console.log(
  filtrarCarrosPorAno(
    [
      { marca: "Ford", modelo: "Focus", ano: 2015 },
      { marca: "Toyota", modelo: "Corolla", ano: 2012 },
    ],
    2014
  )
); // [{ marca: 'Ford', modelo: 'Focus', ano: 2015 }]
console.log(inverterString("hello")); // olleh
