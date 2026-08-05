// zera a variavel de controle 
let slideIndex = 0;
let intervalo;

// Inicia a transição automática ao carregar o script
iniciarCarrossel();

/**
 * faz o slide rodar sozinho ou nos botoes 
 * @param {number} n - Direção da troca.
 */
function mudarSlide(n) {
    let slides = document.getElementsByClassName("meu-slide");
    if (!slides.length) return;
    
    slides[slideIndex].style.display = "none"; 
    slideIndex += n;
    
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    
    slides[slideIndex].style.display = "flex"; 
    resetarIntervalo(); // Zera o timer ao interagir
}

/** configura 3 segundos a cada foto */
function iniciarCarrossel() {
    intervalo = setInterval(() => mudarSlide(1), 3000);
}

/** zera o contador se o usuario clicar no botao */
function resetarIntervalo() {
    clearInterval(intervalo);
    iniciarCarrossel();
}
