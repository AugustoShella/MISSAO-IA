
const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');
const perguntas = [
    {
        enunciado: "Qual a empresa responsável pelo modelo de texto ChatGPT",
        alternativas: [
            "Microsoft",
            "OpenAI"
        ]

    },

    {
        enunciado: "Qual desses modelos de IA é responsável por criação de imagens",
        alternativas: [
            "Gemini",
            "Midjourney"
        ]

    },

    {
        enunciado: "Qual o modelo de IA criado pela Microsoft",
        alternativas: [
            "Copilot",
            "Dalle-2"
        ]

    }

]
let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado
    mostraAlternativas();
}
mostraPergunta();
function mostraAlternativas() {
for (const alternativa of perguntaAtual.alternativas){
    const botaoAlternativas =
    document.createElement("button");
    botaoAlternativas.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);
}
}


