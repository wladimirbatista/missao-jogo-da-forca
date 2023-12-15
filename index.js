import entradaDados from "readline-sync";
import listaDeFrutas from "./dados/dados.js";
import { 
  validarLetraDigitada, 
  verificarJogoGanho, 
  verificarLetraPresenteNaPalavra,
  exibirChancesDeErro,
  atualizarPalavraOculta, 
  exibirMensagemFimDeJogo, 
} from "./funcoes/funcoes.js";

function jogarForca() { // Função principal do jogo

  // Escolhe aleatoriamente uma palavra da lista
  const palavraEscolhida = listaDeFrutas[Math.floor(Math.random() * listaDeFrutas.length)];

  // Oculta a palavra escolhida com 'underlines' deixando visivel somente a letra inicial
  let palavraOculta = palavraEscolhida[0].toUpperCase() + "_".repeat(palavraEscolhida.length - 1);

  let erros = 0;

  let jogoGanho = false;

  let statusJogo;

  console.log(`------------JOGO DA FORCA------------`);

  console.log(`\nNome da fruta com ${palavraEscolhida.length} letras:`);

  while (erros < 4 && !jogoGanho) { // Loop continua enquanto o número de erros for menor que 4 e houver qualquer caractere especial na palavra oculta 

    console.log(`\nFruta: ${palavraOculta}`);

    // Recebe a letra digitada pelo usuário aceitando tanto maiuscula quanto minuscula
    const letraDigitada = entradaDados.question("Digite uma letra: ").toLowerCase();

    if (validarLetraDigitada(letraDigitada)) {
      if (verificarLetraPresenteNaPalavra(palavraEscolhida, letraDigitada)) {
        palavraOculta = atualizarPalavraOculta(palavraOculta, letraDigitada, palavraEscolhida);
        jogoGanho = verificarJogoGanho(palavraOculta, palavraEscolhida)
        statusJogo = jogoGanho
      } else {
        erros++
        exibirChancesDeErro(erros)        
      }
    } else {
      console.log("\nPor favor, digite uma letra válida.");
    }    
  }
  // Consumindo função que verifica a vitoria ou derrota
  exibirMensagemFimDeJogo(statusJogo, palavraOculta, palavraEscolhida);

}

jogarForca(); // Inicia o jogo

