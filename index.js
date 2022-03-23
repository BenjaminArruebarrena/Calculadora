//creando las constantes //

const displayValorAnterior = document.getElementById('valor-aterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual)

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton,innerHTML));
});