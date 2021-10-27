
function alerta()
    {
    let mensaje;
    let opcion = confirm("¿Quieres hacer una trivia?");
    if (opcion == true) {
        mensaje = "<a class=\"boton boton--trivia\" href=\"dep_1_trivia.html\">Click</a>";
	} else {
	    mensaje = "D:";
	}
	document.getElementById("ejemplo").innerHTML = mensaje;
}