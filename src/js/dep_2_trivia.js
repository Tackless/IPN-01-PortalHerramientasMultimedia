// Código Robado


function resultado() {
    let p1, p2, p3, p4, p5, p6, nota;
     
    // <!-- 1ª pregunta -->
    if (document.getElementById('p13').checked==true) {p1=1}
    else {p1=0}
    // <!-- 2ª pregunta -->
    if (document.getElementById('p24').checked==true) {p2=1}
    else {p2=0}
    // <!-- 3ª pregunta -->
    if (document.getElementById('p32').checked==true) {p3=1}
    else {p3=0}
    // <!-- 4ª pregunta -->
    if (document.getElementById('p41').checked==true) {p4=1}
    else {p4=0}

    if (document.getElementById('p52').checked==true) {p5=1}
    else {p5=0}

    if (document.getElementById('p63').checked==true) {p6=1}
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