const botaoNao = document.getElementById("nao");

function numeroAleatorio(min, max) {
    return Math.random() * (max - min) + min;
}

function desviar() {
    const larguraJanela = window.innerWidth;
    const alturaJanela = window.innerHeight;

    const novaEsquerda = numeroAleatorio(10, larguraJanela - 150);
    const novaAltura = numeroAleatorio(10, alturaJanela - 80);

    botaoNao.style.position = "fixed";
    botaoNao.style.left = `${novaEsquerda}px`;
    botaoNao.style.top = `${novaAltura}px`;
}

botaoNao.addEventListener("mouseover", desviar);
botaoNao.addEventListener("touchstart", desviar);

function aceitou() {
    document.getElementById("tela-inicial").classList.add("escondido");
    document.getElementById("tela-agendamento").classList.remove("escondido");
}

function selecionarAtividade(atividade) {
    const dataEscolhida = document.getElementById("data").value;
    const horarioEscolhido = document.getElementById("horario").value;

    if (!dataEscolhida || !horarioEscolhido) {
        alert("Por favor, selecione o dia e o horário antes de escolher o que vamos fazer! 😊");
        return;
    }

    const dataFormatada = dataEscolhida.split('-').reverse().join('/');

    // Mensagem personalizada incluindo a reação
    const textoMensagem = `Eu aceito sair com você. %0A%0AAqui estão os detalhes do nosso encontro:%0A Dia: ${dataFormatada}%0A Horário: ${horarioEscolhido}%0A O que fazer: ${atividade}`;

    // Lembre de colocar o seu número real aqui (Ex: "5511999999999")
    const seuNumeroWhatsapp = "5191992728799"; 

    alert("Perfeito! Redirecionando para o WhatsApp...");
    window.location.href = `https://wa.me/${seuNumeroWhatsapp}?text=${textoMensagem}`;
}