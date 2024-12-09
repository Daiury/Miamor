// Lista de frases motivacionais
const frasesMotivacionais = [
    "Acredite, você é mais forte do que pensa.",
    "Cada passo, por menor que seja, te leva mais perto dos seus sonhos.",
    "Você merece todo o amor que está vivendo agora.",
    "Deixe o passado para trás e abrace o presente com coragem.",
    "Um dia de cada vez, um momento de cada vez.",
    "Você não precisa ser perfeito, apenas continuar tentando.",
    "Seu valor não depende da opinião dos outros.",
    "Aprender a amar e ser amado é um presente único. Viva isso plenamente.",
    "A ansiedade não define quem você é, ela é apenas uma parte do seu processo.",
    "Você está construindo um futuro lindo, e ele começa com o agora."
];

// Selecionar elementos do DOM
const cantadaElement = document.getElementById("cantada");
const botaoGerar = document.getElementById("gerar");

// Função para gerar uma frase motivacional aleatória
function gerarFrase() {
    const indiceAleatorio = Math.floor(Math.random() * frasesMotivacionais.length);
    const frase = frasesMotivacionais[indiceAleatorio];
    cantadaElement.textContent = frase;
}

// Adicionar evento ao botão
botaoGerar.addEventListener("click", gerarFrase);

// Para verificar se o script foi carregado corretamente
console.log("Script carregado corretamente!");
