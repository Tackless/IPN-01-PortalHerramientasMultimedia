
function alerta()
{
var mensaje;
var opcion = confirm("¿Quieres hacer una trivia?");
if (opcion == true) {
    mensaje = "<a class=\"boton--dep2 boton__dep2--trivia boton--trivia\" href=\"dep_2_trivia.html\">Click</a>";
} else {
    mensaje = "D:";
}
document.getElementById("ejemplo").innerHTML = mensaje;
}