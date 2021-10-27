// Código Robado


function resultado() {
    let p1, p2, p3, p4, p5, p6, nota;
     
    // <!-- 1ª pregunta -->
    if (document.getElementById('p12').checked==true) {p1=1}
    else {p1=0}
    // <!-- 2ª pregunta -->
    if (document.getElementById('p23').checked==true) {p2=1}
    else {p2=0}
    // <!-- 3ª pregunta -->
    if (document.getElementById('p31').checked==true) {p3=1}
    else {p3=0}
    // <!-- 4ª pregunta -->
    if (document.getElementById('p44').checked==true) {p4=1}
    else {p4=0}

    if (document.getElementById('p52').checked==true) {p5=1}
    else {p5=0}

    if (document.getElementById('p62').checked==true) {p6=1}
    else {p6=0}
     
    nota=p1+p2+p3+p4+p5+p6;
    alert(" Aciertos: " + nota);
    if (nota<=3) {
        alert("Suerte para la próxima! Sigue estudiando.");
    }   else if (nota<6) {
            alert("Muy bien hecho!");
        }   else {
                alert("Lo has hecho increible!");
            }
    location.reload();
    }