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