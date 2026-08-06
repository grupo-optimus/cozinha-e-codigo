let slideIndex = 0;
let intervalo;

iniciarCarrossel();

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

function resetarIntervalo() {
    clearInterval(intervalo);
    iniciarCarrossel();
}
