const avion = document.querySelector('#avion');
const tituloContenido6 = document.querySelector('#titulo__contenido--6');
const tituloContenido7 = document.querySelector('#titulo__contenido--7');
const tituloContenido8 = document.querySelector('#titulo__contenido--8');
const tituloContenido9 = document.querySelector('#titulo__contenido--9');
const tituloContenido10 = document.querySelector('#titulo__contenido--10');
const tarea6 =document.querySelector('#tarea_6');
const tarea7 =document.querySelector('#tarea_7');
const tarea8 =document.querySelector('#tarea_8');
const tarea9 =document.querySelector('#tarea_9');
const tarea10 =document.querySelector('#tarea_10');

setTimeout(() => {
    avion.remove();
}, 3000);


tituloContenido6.addEventListener('click', function(e) {
    tituloContenido6.remove();
    tarea6.classList.remove('borrar');
});

tituloContenido7.addEventListener('click', function(e) {
    tituloContenido7.remove();
    tarea7.classList.remove('borrar');
});

tituloContenido8.addEventListener('click', function(e) {
    tituloContenido8.remove();
    tarea8.classList.remove('borrar');
});

tituloContenido9.addEventListener('click', function(e) {
    tituloContenido9.remove();
    tarea9.classList.remove('borrar');
});

tituloContenido10.addEventListener('click', function(e) {
    tituloContenido10.remove();
    tarea10.classList.remove('borrar');
});