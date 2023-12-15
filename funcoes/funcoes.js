function atualizarPalavraOculta(palavraOculta, letraDigitada, palavraEscolhida) { // Função que atualiza a palavra oculta
  let novaPalavraOculta = palavraOculta;

  for (let i = 0; i < palavraEscolhida.length; i++) { // loop que continua até o tamanho final da palavra escolhida
    if (palavraEscolhida[i] === letraDigitada) { // verifica se cada letra da palavra escolhida e igual a letra digitada
      novaPalavraOculta = novaPalavraOculta.substring(0, i) + letraDigitada + palavraOculta.substring(i + 1); // atualiza a palavra oculta, revelando a letra digitada
    }
  }

  return novaPalavraOculta
}
function validarLetraDigitada(letraDigitada){ // Função que verifica se a letra digitada é um caractere único e alfabético
  if(letraDigitada.length === 1 && letraDigitada.match(/[a-z]/)){
    return true
  } else {
    return false
  }
}

function verificarJogoGanho(palavraOculta, palavraEscolhida) { // Função que verifica se todas as letras da palavra oculta foram reveladas
  if(palavraOculta === palavraEscolhida) {
    return true
  }
}

function verificarLetraPresenteNaPalavra(palavraEscolhida, letraDigitada){ // Função que verifica que a letra digitada encontra-se na palavra escolhida
  if(palavraEscolhida.includes(letraDigitada)){
    return true
  } else {
    return false
  }
}

function exibirChancesDeErro(erros){
  if(erros < 4) {
    console.log(`OPÇÃO ERRADA! Você ainda tem ${4 - erros} chance(s)!`);
  }
}

function exibirMensagemFimDeJogo(statusJogo, palavraOculta, palavraEscolhida) { // Função que verifica o status do jogo e imprime uma mensagem informando se o jogo terminou em vitoria ou derrota
  if (statusJogo) {
    console.log("\n--------------PARABÉNS!---------------");
    console.log(`Você acertou o nome da fruta: ${palavraOculta}`);
    console.log("--------------------------------------");
  } else {
    console.log("\n-------------VOCÊ PERDEU!-------------");
    console.log(`O nome da fruta é: ${palavraEscolhida}`);
    console.log("--------------------------------------");
  }
}

export { 
  validarLetraDigitada, 
  verificarJogoGanho, 
  verificarLetraPresenteNaPalavra,
  exibirChancesDeErro,
  atualizarPalavraOculta, 
  exibirMensagemFimDeJogo 
};

