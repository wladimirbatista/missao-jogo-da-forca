import entradaDados from "readline-sync";
import { palavraEscolhida, palavraOculta, erros, verificarLetra } from "./funcoes/funcoes.js";

function jogarForca() { // Função principal do jogo
  
  console.log(`------------JOGO DA FORCA------------`);

  console.log(`\nNome da fruta com ${palavraEscolhida.length} letras:`);

  while (erros < 4 && palavraOculta.includes("_")) {
    
    console.log(`\nFruta: ${palavraOculta}`);
    const letraDigitada = entradaDados.question("Digite uma letra: ").toLowerCase(); // letra digitada pelo usuário (sempre minusculo)

    //verifica se a letra possui somente 1 caractere e se esta entre 'a' e 'z'
    if (letraDigitada.length === 1 && letraDigitada.match(/[a-z]/)) {
      verificarLetra(letraDigitada);
    } else {
      console.log("\nPor favor, digite uma única letra.");
    }

    // Verifica se a letra revelou a palavra completa
    if (palavraOculta === palavraEscolhida) {
      console.log("\n--------------PARABÉNS!---------------");
      console.log(`Você acertou o nome da fruta: ${palavraOculta}`);
      console.log("--------------------------------------");
      return;
    }
  }
  console.log("\n-------------VOCÊ PERDEU!-------------");
  console.log(`O nome da fruta é: ${palavraEscolhida}`);
  console.log("--------------------------------------");
}

jogarForca(); // Inicia o jogo

