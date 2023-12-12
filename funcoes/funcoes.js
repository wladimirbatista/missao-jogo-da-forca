import listaDeFrutas from "../dados/dados.js";

// Escolhe aleatoriamente uma palavra da lista
const palavraEscolhida = listaDeFrutas[Math.floor(Math.random() * listaDeFrutas.length)];

// cria uma versão da palavra escolhida com a letra inicial revelada e ocultando as demais letras com '-'
let palavraOculta = palavraEscolhida[0].toUpperCase() + "_".repeat(palavraEscolhida.length - 1);

let erros = 0;

// Função para verificar se a letra digitada está na palavra
function verificarLetra(letraDigitada) {
  if (palavraEscolhida.includes(letraDigitada)) {
    // Atualiza a palavra oculta com a letraDigitada revelada
    for (let i = 0; i < palavraEscolhida.length; i++) {
      if (palavraEscolhida[i] === letraDigitada) {
        palavraOculta = palavraOculta.substring(0, i) + letraDigitada + palavraOculta.substring(i + 1);
      }
    }
  } else {
    if (erros < 3) {
      console.log(`OPÇÃO ERRADA! Você ainda tem ${3 - erros} chances!`);
    }
    erros++; // Incrementa o número de erros
  }
}

export { palavraEscolhida, palavraOculta, erros, verificarLetra };

