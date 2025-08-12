const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acordou em um dia ensolarado. Qual a primeira coisa que faz?",
        alternativas: [
            {
                texto: "Escolho um look incrível para arrasar!",
                afirmacao: "Você adora se expressar através da moda."
            },
            {
                texto: "Organizo meu dia para ser super produtivo.",
                afirmacao: "Você é prática e gosta de manter tudo sob controle."
            }
        ]
    },
    {
        enunciado: "Se pudesse escolher uma profissão dos sonhos, qual seria?",
        alternativas: [
            {
                texto: "Estilista famosa!",
                afirmacao: "Você ama criar e colocar sua imaginação em prática."
            },
            {
                texto: "Cientista renomada!",
                afirmacao: "Você gosta de explorar e aprender coisas novas."
            }
        ]
    },
    {
        enunciado: "Um sábado perfeito para você é...",
        alternativas: [
            {
                texto: "Passear com amigos e tirar muitas fotos.",
                afirmacao: "Você adora socializar e criar memórias."
            },
            {
                texto: "Relaxar com um bom livro ou filme.",
                afirmacao: "Você também valoriza momentos de tranquilidade."
            }
        ]
    }
];

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    const perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = "";
    perguntaAtual.alternativas.forEach(alternativa => {
        const botao = document.createElement("button");
        botao.textContent = alternativa.texto;
        botao.addEventListener("click", () => {
            historiaFinal += alternativa.afirmacao + " ";
            atual++;
            mostraPergunta();
        });
        caixaAlternativas.appendChild(botao);
    });
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resultado";
    textoResultado.textContent = historiaFinal + "Você é uma Barbie única, cheia de estilo e personalidade!";
    caixaAlternativas.innerHTML = "";
}

mostraPergunta();
