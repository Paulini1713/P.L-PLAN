'use strict'

let index = 0;

function mostrarSlide(n) {
    const slides = document.querySelectorAll('.div-item');
    if (n >= slides.length) {
        index = 0;
    } else if (n < 0) {
        index = slides.length - 1;
    } else {
        index = n;
    }

    const offset = -index * 100;
    document.querySelector('.div-ella').style.transform = `translateX(${offset}%)`;
}
function cambiarSlide(n) {
    mostrarSlide(index + n);
}

// Mostrar el primer slide al cargar
mostrarSlide(index);







