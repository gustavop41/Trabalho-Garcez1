// Dados dos 3 ambientes do Colégio Garcez com suas respectivas fotos
const dadosAmbientes = {
    sala: {
        titulo: "Sala de Aula",
        descricao: "Espaço dedicado ao aprendizado, focado na troca de conhecimento entre alunos e professores.",
        classe: "sala",
        acaoMsg: "Você abriu o caderno para tomar notas da aula!",
        imagem: "saladeaula.jpeg"
    },
    patio: {
        titulo: "Pátio e Quadra",
        descricao: "Lugar de convivência, esportes, recreação e eventos do Colégio Garcez.",
        classe: "patio",
        acaoMsg: "Você jogou a bola na quadra e marcou um ponto!",
        imagem: "quadra.jpg"
    },
    biblioteca: {
        titulo: "Biblioteca",
        descricao: "Ambiente silencioso voltado para leitura, pesquisas e estudos individuais ou em grupo.",
        classe: "biblioteca",
        acaoMsg: "Você emprestou um livro incrível para ler esta semana!",
        imagem: "biblioteca.jpeg"
    }
};

let ambienteAtual = 'sala';

// Funcao para mudar de ambiente
function mudarAmbiente(chave) {
    ambienteAtual = chave;
    const info = dadosAmbientes[chave];

    // Atualiza o texto e a imagem do ambiente
    document.getElementById('titulo-ambiente').innerText = info.titulo;
    document.getElementById('descricao-ambiente').innerText = info.descricao;
    document.getElementById('img-ambiente').src = info.imagem;
    document.getElementById('img-ambiente').alt = info.titulo;
    
    // Limpa a mensagem de interacao anterior
    document.getElementById('mensagem-interacao').innerText = "";

    // Atualiza a classe visual do card
    const card = document.getElementById('card-ambiente');
    card.className = "card " + info.classe;
}

// Funcao de interacao com o ambiente selecionado
function executarAcao() {
    const info = dadosAmbientes[ambienteAtual];
    document.getElementById('mensagem-interacao').innerText = info.acaoMsg;
}