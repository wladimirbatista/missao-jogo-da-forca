import entradaDados from "readline-sync";
import listaDeFrutas from "./dados/dados.js";
// import { verificarLetraDigitada, verificarLetrasReveladas, atualizarPalavraOculta, incrementarErros, mensagemFimDeJogo } from "./funcoes/funcoes.js";

import { processarLetraDigitada, mensagemFimDeJogo } from "./funcoes/funcoes.js";

function jogarForca() { // Função principal do jogo

  // Escolhe aleatoriamente uma palavra da lista
  const palavraEscolhida = listaDeFrutas[Math.floor(Math.random() * listaDeFrutas.length)];

  // Oculta a palavra escolhida com 'underlines' deixando visivel somente a letra inicial
  let palavraOculta = palavraEscolhida[0].toUpperCase() + "*".repeat(palavraEscolhida.length - 1);

  let erros = 0;

  let jogoGanho = false;

  console.log(`------------JOGO DA FORCA------------`);

  console.log(`\nNome da fruta com ${palavraEscolhida.length} letras:`);

  while (erros < 4 && !jogoGanho) { // Loop continua enquanto o número de erros for menor que 4 e houver qualquer caractere especial na palavra oculta 

    console.log(`\nFruta: ${palavraOculta}`);

    // Recebe a letra digitada pelo usuário aceitando tanto maiuscula quanto minuscula
    const letraDigitada = entradaDados.question("Digite uma letra: ").toLowerCase();

    // Chama a função processarLetraDigitada e armazena as variáveis atualizadas
    const resultado = processarLetraDigitada(letraDigitada, erros, palavraEscolhida, palavraOculta, jogoGanho);

    // if (verificarLetraDigitada(letraDigitada) && palavraEscolhida.includes(letraDigitada)) {
    //   palavraOculta = atualizarPalavraOculta(palavraOculta, letraDigitada, palavraEscolhida);
    //   if (palavraOculta.includes(letraDigitada)) {
    //     jogoGanho = verificarLetrasReveladas(palavraOculta)
    //   } else {
    //     erros = incrementarErros(erros);
    //   }
    // } else {
    //   console.log("\nPor favor, digite uma letra válida.");
    // }

    // Atualiza as variáveis com os valores retornados pela função verificarLetraDigitada
    jogoGanho = resultado.novoResultadoJogoGanho;
    palavraOculta = resultado.novaPalavraOculta;
    erros = resultado.errosAtualizados;

  }
  // Consumindo função que verifica a vitoria ou derrota
  mensagemFimDeJogo(palavraOculta, palavraEscolhida);
}

jogarForca(); // Inicia o jogo

