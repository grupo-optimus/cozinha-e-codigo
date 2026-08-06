let slideIndex = 0;
let intervalo;

iniciarCarrossel();

<<<<<<< Updated upstream
// n = -1 volta um slide, n = 1 avanca; o indice da a volta nas pontas
=======
>>>>>>> Stashed changes
function mudarSlide(n) {
    let slides = document.getElementsByClassName("meu-slide");
    if (!slides.length) return;

    slides[slideIndex].style.display = "none";
    slideIndex += n;

    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;

    slides[slideIndex].style.display = "flex";
    resetarIntervalo();
}

function iniciarCarrossel() {
    intervalo = setInterval(() => mudarSlide(1), 3000);
}

<<<<<<< Updated upstream
// Reinicia a contagem quando o usuario clica, pra nao trocar logo em seguida
=======
>>>>>>> Stashed changes
function resetarIntervalo() {
    clearInterval(intervalo);
    iniciarCarrossel();
}
