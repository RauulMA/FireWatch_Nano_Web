const imagens = [
    './src/assets/imgs/Incendio_Floresta.png',
    './src/assets/imgs/Logo_FireWatch_Nano.png',
    './src/assets/imgs/Publico_Alvo.png',
]

let indice = 0;

const botaoTema = document.getElementById("btn-tema");

let temaAtual = 0;

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