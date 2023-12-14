// Função que verifica se a letra digitada está na palavra e atualiza a palavra oculta
function atualizarVariaveis(letraDigitada, erros, palavraEscolhida, palavraOculta, jogoGanho) {
  let novaPalavraOculta = palavraOculta
  let errosAtualizados = erros
  let novoResultadoJogoGanho = jogoGanho

  if (palavraEscolhida.includes(letraDigitada)) { // Verifica se a letra digitada encontra-se na palavra escolhida
    for (let i = 0; i < palavraEscolhida.length; i++) { // loop que continua até o tamanho final da palavra escolhida
      if (palavraEscolhida[i] === letraDigitada) { // verifica se cada letra da palavra escolhida e igual a letra digitada
        novaPalavraOculta = novaPalavraOculta.substring(0, i) + letraDigitada + palavraOculta.substring(i + 1); // atualiza a palavra oculta, revelando a letra digitada
      }
    }
    novoResultadoJogoGanho = verificarLetrasReveladas(novaPalavraOculta)
  } else {
    errosAtualizados = incrementarErros(erros)
  }
  return {novaPalavraOculta, errosAtualizados, novoResultadoJogoGanho}
}

function verificarLetrasReveladas(novaPalavraOculta) {
  if(!novaPalavraOculta.match(/[^a-z]/i)){
    return true
  }
}

// Função para incrementar o número de erros
function incrementarErros(erros) { 
  if (erros < 3) {
    console.log(`OPÇÃO ERRADA! Você ainda tem ${3 - erros} chances!`);
  }
  erros++; // Incrementa o número de erros
  return erros;
}

// Função para verificar se a letra digitada é um caractere único alfabético (entre 'a' a 'z')
function verificarLetraDigitada(letraDigitada){
  if(letraDigitada.length === 1 && letraDigitada.match(/[a-z]/)){
    return true
  } else {
    return false
  }
}

function processarLetraDigitada(letraDigitada, erros, palavraEscolhida, palavraOculta, jogoGanho) {
  if(verificarLetraDigitada(letraDigitada)) {
    return atualizarVariaveis(letraDigitada, erros, palavraEscolhida, palavraOculta, jogoGanho) // Retorna um objeto contendo a nova palavra oculta, o número de erros atualizado e o resultado do jogo
  } else {
    console.log("\nPor favor, digite uma letra válida.");
    return {novaPalavraOculta: palavraOculta, errosAtualizados: erros, novoResultadoJogoGanho: jogoGanho} // Se a letra não for válida, exibe uma mensagem e retorna um objeto com os valores atuais
  }
}

// Função para verificar se o jogo terminou em vitoria ou derrota
function mensagemFimDeJogo(palavraOculta, palavraEscolhida) {
  if (palavraOculta === palavraEscolhida) {
    console.log("\n--------------PARABÉNS!---------------");
    console.log(`Você acertou o nome da fruta: ${palavraOculta}`);
    console.log("--------------------------------------");
  } else {
    console.log("\n-------------VOCÊ PERDEU!-------------");
    console.log(`O nome da fruta é: ${palavraEscolhida}`);
    console.log("--------------------------------------");
  }
}

export { processarLetraDigitada, mensagemFimDeJogo };

