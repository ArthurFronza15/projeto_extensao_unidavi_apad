document.addEventListener("DOMContentLoaded", () => {

    const myObserver = new IntersectionObserver((entries) => {
        console.log(entries);
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });
    const elements = document.querySelectorAll('.hide');
    elements.forEach((element) => myObserver.observe(element));


    const btnSaibaMais = document.getElementById("saibaMais");
    const corpo = document.querySelector(".corpo");

    function scrollLento(element, duracao = 1150) {
        const destino = element.getBoundingClientRect().top + window.pageYOffset;
        const inicio = window.pageYOffset;
        const distancia = destino - inicio;
        let inicioTempo = null;

        function animarScroll(tempoAtual) {
            if (!inicioTempo) inicioTempo = tempoAtual;
            const tempoPassado = tempoAtual - inicioTempo;
            const ease = t => t * (2 - t);
            const progresso = ease(Math.min(tempoPassado / duracao, 1));

            window.scrollTo(0, inicio + distancia * progresso);

            if (progresso < 1) {
                requestAnimationFrame(animarScroll);
            }
        }

        requestAnimationFrame(animarScroll);
    }

    btnSaibaMais.addEventListener("click", () => {
        scrollLento(corpo, 1150);
    });

    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
});

let index = 0;
const slidesC = document.querySelectorAll(".c-slide");

function showC(i) {
    slidesC.forEach(s => s.classList.remove("active"));
    slidesC[i].classList.add("active");
}

document.querySelector(".next").addEventListener("click", nextC);
document.querySelector(".prev").addEventListener("click", prevC);

const indicatorsContainer = document.querySelector(".c-indicators");

slidesC.forEach((_, i) => {
    const dot = document.createElement("div");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
        index = i;
        updateCarousel();
    });
    indicatorsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".c-indicators div");

function updateCarousel() {
    showC(index);

    dots.forEach(d => d.classList.remove("active"));
    dots[index].classList.add("active");
}

function nextC() {
    index = (index + 1) % slidesC.length;
    updateCarousel();
}

function prevC() {
    index = (index - 1 + slidesC.length) % slidesC.length;
    updateCarousel();
}