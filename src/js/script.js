// =========================================================
// SLIDE SHOW
// =========================================================
const imagens = [
    './src/assets/imgs/Incendio_Floresta.png',
    './src/assets/imgs/Logo_FireWatch_Nano.png',
    './src/assets/imgs/Publico_Alvo.png',
]

let indice = 0;


function mostrarSlide() {
    document.getElementById("hero_slideshow").src = imagens[indice];
}

function proximoSlide() {
    indice++;
    if(indice >= imagens.length){
        indice = 0;
    }
    mostrarSlide();
}

function voltarSlide() {
    indice--;
    if(indice < 0){
        indice = imagens.length - 1;
    }
    mostrarSlide();
}

// =========================================================
// TROCAR TEMA
// =========================================================
const botaoTema = document.getElementById("btn-tema");

let temaAtual = 0;

botaoTema.addEventListener("click", function () {
    temaAtual++;
    
    if (temaAtual > 2) {
        temaAtual = 0;
    }

    document.body.classList.remove("tema-verde");
    document.body.classList.remove("tema-azul");

    if (temaAtual === 0) {
        botaoTema.textContent = "Tema";
    }
    else if (temaAtual === 1) {
        document.body.classList.add("tema-verde");
        botaoTema.textContent = "Verde";
    }
    else {
        document.body.classList.add("tema-azul");
        botaoTema.textContent = "Azul";
    }
});

// =========================================================
// QUIZ FIREWATCH NANO
// =========================================================

const formularioQuiz = document.querySelector(".quiz-form");
const resultadoQuiz = document.getElementById("resultado-quiz");

// Respostas corretas do quiz
const respostasCorretas = {
    q1: "sim",
    q2: "sim",
    q3: "sim",
    q4: "sim",
    q5: "sim",
    q6: "nao",
    q7: "nao",
    q8: "sim",
    q9: "sim",
    q10: "sim"
};

if (formularioQuiz) {
    formularioQuiz.addEventListener("submit", function (event) {
        event.preventDefault();

        let pontos = 0;
        let totalPerguntas = 10;
        let todasRespondidas = true;

        for (let pergunta in respostasCorretas) {
            const campo = document.getElementById(pergunta);

            if (campo.value === "") {
                todasRespondidas = false;
            }
            else if (campo.value === respostasCorretas[pergunta]) {
                pontos++;
            }
        }

        if (todasRespondidas === false) {
            resultadoQuiz.textContent = "Responda todas as perguntas antes de enviar.";
            resultadoQuiz.style.color = "#ffcc00";
            return;
        }

        resultadoQuiz.textContent = "Você acertou " + pontos + " de " + totalPerguntas + " perguntas.";

        if (pontos >= 8) {
            resultadoQuiz.style.color = "#4caf50";
        }
        else if (pontos >= 5) {
            resultadoQuiz.style.color = "#ffcc00";
        }
        else {
            resultadoQuiz.style.color = "#ff5252";
        }
    });
}